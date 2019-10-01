import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError, empty } from "rxjs";

import { environment } from "./../../../environments/environment";
import { AuthService } from "./../services/auth.service";
import { catchError } from "rxjs/operators";

export class ApiBaseService {
    private baseApiUrl: string = environment.api_url;

    constructor(private http: HttpClient, private authService: AuthService) {
        
    }

    protected get<T>(url: string): Observable<T> {
        return this.http.get<T>(this.baseApiUrl + url).pipe(
            catchError(this.handleError)
        );
    }

    protected put<TPayload, TResponse>(url: string, payload: TPayload): Observable<TResponse> {
        return this.http.put<TResponse>(this.baseApiUrl + url, payload, { headers: { 'Content-Type': "application/json" } }).pipe(
            catchError(this.handleError)
        );
    }

    protected putWithHeaders<TPayload, TResponse>(url: string, payload: TPayload, headers: HttpHeaders): Observable<TResponse> {
        return this.http.put<TResponse>(this.baseApiUrl + url, payload, { headers: headers }).pipe(
            catchError(this.handleError)
        );
    }

    protected post<TPayload, TResponse>(url: string, payload: TPayload): Observable<TResponse> {
        return this.http.post<TResponse>(this.baseApiUrl + url, payload).pipe(
            catchError(this.handleError)
        );
    }

    protected delete(url: string): Observable<any> {
        return this.http.delete(this.baseApiUrl + url).pipe(
            catchError(this.handleError)
        );
    }

    protected deleteWithBody(url: string, value: any): Observable<any> {
        return this.http.request("delete", this.baseApiUrl + url, { body: value }).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse): Observable<any> {
        if (error.error instanceof ErrorEvent) {
            if (error.error.message) {
                console.error('An error occurred: ', error.error.message);
            }
        } else {
            console.error(`Backend returned code ${error.status}, body was: ${JSON.stringify(error.error)}`);
        }

        return throwError('Oops! Something bad happened and we were unable to complete your request. Please try again later.');
    }
}
