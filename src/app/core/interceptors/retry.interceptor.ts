
import {retry} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class RetryInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // If the call fails, retry until 5 times before throwing an error
        return next.handle(request).pipe(retry(5));
    }
}