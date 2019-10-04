
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { AuthService } from "../services/index";
import { Store } from "@ngrx/store";
import { IUIState } from "../reducers/ui.state.reducer";
import { Router } from "@angular/router";
import { ShowErrorModalAction } from "../actions/ui.state.actions";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private store: Store<IUIState>, private router: Router) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            let message = "";
            let traceId = "";

            if (!navigator.onLine) {
                message = "No internet connection";
            }
            else {
                if (err.status === 400) {
                    // We want 400 errors to be picked up by the UI sending the action
                    // So don't show the generic modal
                    console.error(`Backend returned code ${err.status}. TraceId: ${traceId}. Error: ${err.error.title}. Details: ${JSON.stringify(err.error.errors)}`);  
                    return throwError(err);
                } else if (err.status === 401) {
                    this.authService.startAuthentication("");
                } else if (err.status === 402) {
                    this.router.navigateByUrl("/payment-required");
                } else {
                    message = "Oops! Something unexpected happened.\nPlease try again later."
                    console.error(JSON.stringify(err))
                }
            }

            if (message) {
                this.store.dispatch(new ShowErrorModalAction({ message: message, title: "Error", traceId: traceId }));
            }
            
            return throwError(err);
        }));
    }
}
