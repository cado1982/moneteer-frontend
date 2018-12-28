
import {catchError} from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/observable";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { AuthService } from "../services/index";
import { error } from "util";

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                this.authService.startAuthentication("");
            }
            if (err.error instanceof ErrorEvent) {
                // a client side or network error occurred.
                console.error("An error occurred:", err.err.message);
            } else if (typeof err.err === "string") {
                // server side error
                console.error(`Backend returned code ${err.status}, ` +
                    `body was: ${err.error}`);

                throw new Error(err.error);
            }

            return Observable.throw(err);
        }));
    }
}
