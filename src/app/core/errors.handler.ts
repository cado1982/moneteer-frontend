import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { NotificationsService } from "./services";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ErrorsHandler implements ErrorHandler {

    constructor(private injector: Injector) {
        
    }

    handleError(error: Error | HttpErrorResponse) {
        const notificationService = this.injector.get(NotificationsService);

        if (error instanceof HttpErrorResponse) {
            if (!navigator.onLine) {
                return notificationService.error("No internet connection");
            } else {
                return notificationService.error(`${error.status} - ${error.message}`);
            }
        } else {
            console.error(error);
            return notificationService.errorModal(`${error.name}\r\n${error.message}\r\n${error.stack}`);
        }

    }
}