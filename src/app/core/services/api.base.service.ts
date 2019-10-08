import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

import { environment } from "./../../../environments/environment";
import { IUIState } from "../reducers/ui.state.reducer";
import { Store } from "@ngrx/store";
import { catchError } from "rxjs/operators";
import { ShowErrorModalAction } from "../actions/ui.state.actions";

export class ApiBaseService {
    private baseApiUrl: string = environment.api_url;

    constructor(protected http: HttpClient, protected store: Store<IUIState>) {
        
    }

    protected get<T>(url: string): Observable<T> {
        return this.http.get<T>(this.baseApiUrl + url);
    }

    protected put<TPayload, TResponse>(url: string, payload: TPayload): Observable<TResponse> {
        return this.http.put<TResponse>(this.baseApiUrl + url, payload, { headers: { 'Content-Type': "application/json" } });
    }

    protected putWithHeaders<TPayload, TResponse>(url: string, payload: TPayload, headers: HttpHeaders): Observable<TResponse> {
        return this.http.put<TResponse>(this.baseApiUrl + url, payload, { headers: headers });
    }

    protected post<TPayload, TResponse>(url: string, payload: TPayload): Observable<TResponse> {
        return this.http.post<TResponse>(this.baseApiUrl + url, payload).pipe(
            catchError(err => this.handleHttpResponseError(err))
        );
    }

    protected delete(url: string): Observable<any> {
        return this.http.delete(this.baseApiUrl + url);
    }

    protected deleteWithBody(url: string, value: any): Observable<any> {
        return this.http.request("delete", this.baseApiUrl + url, { body: value });
    }

    protected handleHttpResponseError(err: HttpErrorResponse): Observable<never> {
        let message = "Something went wrong on our end, sorry about that.\n\nPlease refresh your screen and try your last action again.";
        let traceId: string | undefined = undefined;

        if (err.status === 400 && err.error && err.error.traceId) {
            traceId = err.error.traceId;
        }

        this.store.dispatch(new ShowErrorModalAction({message: message, title: "", traceId: traceId}));

        return throwError(message);
    }
}
