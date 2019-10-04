import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError, empty } from "rxjs";

import { environment } from "./../../../environments/environment";
import { AuthService } from "./../services/auth.service";
import { catchError } from "rxjs/operators";
import { ModalService } from "./modal.service";
import { Actions } from "@ngrx/effects";
import { IUIState } from "../reducers/ui.state.reducer";
import { Store } from "@ngrx/store";
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
        return this.http.post<TResponse>(this.baseApiUrl + url, payload);
    }

    protected delete(url: string): Observable<any> {
        return this.http.delete(this.baseApiUrl + url);
    }

    protected deleteWithBody(url: string, value: any): Observable<any> {
        return this.http.request("delete", this.baseApiUrl + url, { body: value });
    }

    // private handleError(error: HttpErrorResponse): Observable<any> {
    //     let message: string = "Oops! Something unexpected happened. Please try again later.";
    //     let traceId: string = "";

    //     if (!navigator.onLine) {
    //         message = "No internet connection."
    //     } else if (error.error instanceof ErrorEvent) { // It's a client error
    //         if (error.error.message) {
    //             console.error('An error occurred: ', error.error.message);
    //         }
    //     } else if (error.error.status) // It's a web api error
    //         message = `Oops! We were unable to process your request.\nPlease try again later.`;
    //         traceId = error.error.traceId;
    //         console.error(`Backend returned code ${error.status}. TraceId: ${error.error.traceId}. Error: ${error.error.title}. Details: ${JSON.stringify(error.error.errors)}`
    //     );

    //     this.store.dispatch(new ShowErrorModalAction({message: message, title: "Error", traceId: traceId}));

    //     return throwError('Oops! Something unexpected happened. Please try again later.');
    // }
}
