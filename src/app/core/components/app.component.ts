
import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ErrorModalComponent } from "./error-modal/error.modal.component";
import { IUIState } from "../reducers/ui.state.reducer";
import { Store } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";
import { UIStateActionTypes, ShowErrorModalAction } from "../actions/ui.state.actions";
import { map } from "rxjs/operators";

@Component({
    selector: "moneteer-root",
    template: `<ngx-loading-bar></ngx-loading-bar>
    <router-outlet></router-outlet>`
})
export class AppComponent {
    constructor(public store: Store<IUIState>, public actions$: Actions, public modal: NgbModal) {
        actions$.pipe(
            ofType(UIStateActionTypes.ShowErrorModal),
            map((action: ShowErrorModalAction) => action.payload)
        ).subscribe(payload => {
            let modalRef = this.modal.open(ErrorModalComponent);
            modalRef.componentInstance.title = payload.title;
            modalRef.componentInstance.message  = payload.message;
            modalRef.componentInstance.traceId = payload.traceId;
        });
    }
}