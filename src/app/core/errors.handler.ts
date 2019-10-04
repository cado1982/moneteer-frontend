import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { NotificationsService } from "./services";
import { HttpErrorResponse } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { IUIState } from "./reducers/ui.state.reducer";
import { ShowErrorModalAction } from "./actions/ui.state.actions";

@Injectable()
export class ErrorsHandler implements ErrorHandler {

    constructor(private injector: Injector) {
        
    }

    handleError(error: Error | HttpErrorResponse) {
        const store = this.injector.get(Store);

        console.error(error);

        if (!(error instanceof HttpErrorResponse)) {
            store.dispatch(new ShowErrorModalAction({message: `Oops! Something bad happpened.\n\nPlease try again later.`, title: "", traceId: ""}))
        }
    }
}