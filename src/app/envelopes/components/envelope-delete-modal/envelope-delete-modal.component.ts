import { Component, OnInit } from '@angular/core';
import { EnvelopeModel } from 'src/app/core/models';
import { EnvelopesActionTypes, DeleteEnvelopeFailureAction, DeleteEnvelopeAction } from 'src/app/core/actions/envelopes.actions';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ITransactionsState } from 'src/app/core/reducers/transactions.reducer';
import { map } from 'rxjs/operators';

@Component({
    selector: 'moneteer-envelope-delete-modal',
    templateUrl: './envelope-delete-modal.component.html',
    styleUrls: ['./envelope-delete-modal.component.scss']
})
export class EnvelopeDeleteModalComponent implements OnInit {
    public isBusy: boolean;
    public error: string;
    public envelope: EnvelopeModel;

    constructor(
        public modal: NgbActiveModal,
        private store: Store<ITransactionsState>,
        private actions$: Actions) { }

    ngOnInit() {
        this.actions$.pipe(
            ofType(EnvelopesActionTypes.DeleteEnvelopeFailure),
            map((action: DeleteEnvelopeFailureAction) => action.payload.error)
        ).subscribe(error => {
            this.isBusy = false;
            this.error = error;
        });

        this.actions$.pipe(
            ofType(EnvelopesActionTypes.DeleteEnvelopeSuccess)
        ).subscribe(() => {
            this.isBusy = false;
            this.modal.close();
        })
    }

    public delete(): void {
        this.error = "";

        if (!this.envelope) {
            return;
        }

        this.isBusy = true;

        this.store.dispatch(new DeleteEnvelopeAction({
            envelopeId: this.envelope.id,
            balance: this.envelope.balance
        }));
    }

}
