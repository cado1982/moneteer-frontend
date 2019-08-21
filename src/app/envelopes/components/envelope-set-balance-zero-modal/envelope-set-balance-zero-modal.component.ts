import { Component, OnInit } from '@angular/core';
import { ofType, Actions } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { EnvelopesActionTypes, MoveBalanceRequestAction, MoveBalanceFailureAction } from 'src/app/core/actions/envelopes.actions';
import { Store } from '@ngrx/store';
import { IEnvelopesState, getAvailableIncomeEnvelope } from 'src/app/core/reducers/envelopes.reducer';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EnvelopeModel, EnvelopeBalanceTarget } from 'src/app/core/models';

@Component({
    selector: 'moneteer-envelope-set-balance-zero-modal',
    templateUrl: './envelope-set-balance-zero-modal.component.html',
    styleUrls: ['./envelope-set-balance-zero-modal.component.scss']
})
export class EnvelopeSetBalanceZeroModalComponent implements OnInit {

    public availableIncomeEnvelope: EnvelopeModel;
    public envelope: EnvelopeModel;
    public isBusy: boolean;
    public error: string;

    constructor(
        public modal: NgbActiveModal,
        private store: Store<IEnvelopesState>,
        private actions$: Actions) { }

    ngOnInit() {
        this.actions$.pipe(
            ofType(EnvelopesActionTypes.MoveBalanceFailure),
            map((action: MoveBalanceFailureAction) => action.payload.error)
        ).subscribe(error => {
            this.isBusy = false;
            this.error = error;
        });

        this.actions$.pipe(
            ofType(EnvelopesActionTypes.MoveBalanceSuccess)
        ).subscribe(() => {
            this.isBusy = false;
            this.modal.close();
        })

        this.store.select(getAvailableIncomeEnvelope).subscribe(e => this.availableIncomeEnvelope = e);
    }

    public submit(): void {
        this.isBusy = true;

        this.store.dispatch(new MoveBalanceRequestAction({
            fromEnvelopeId: this.envelope.id,
            targets: [new EnvelopeBalanceTarget(this.availableIncomeEnvelope.id, this.envelope.balance)]
        }));
    }
}
