
import {catchError} from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { AuthService } from "../services/index";
import { Router } from "@angular/router";

@Injectable()
export class ForbiddenInterceptor implements HttpInterceptor {
    constructor(private router: Router) {
        
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 403) {
                this.router.navigateByUrl("/forbidden");
            }

            return throwError(err);
        }));
    }
}
