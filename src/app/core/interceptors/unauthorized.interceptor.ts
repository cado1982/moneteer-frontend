
import {catchError} from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { AuthService } from "../services/index";

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {
        
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
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

            return throwError(err);
        }));
    }
}
