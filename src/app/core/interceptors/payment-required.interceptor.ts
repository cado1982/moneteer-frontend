
import {catchError} from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class PaymentRequiredInterceptor implements HttpInterceptor {
    constructor(private router: Router) {
        
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 402) {
                this.router.navigateByUrl("/payment-required");
            }

            return throwError(err);
        }));
    }
}
