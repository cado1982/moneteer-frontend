import { Component, OnInit } from '@angular/core';
import { IEnvelopesState, getAllEnvelopes } from 'src/app/core/reducers/envelopes.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EnvelopeModel, EnvelopeBalanceTarget } from 'src/app/core/models';
import { Actions, ofType } from '@ngrx/effects';
import { MoveBalanceRequestAction, EnvelopesActionTypes, MoveBalanceFailureAction } from 'src/app/core/actions/envelopes.actions';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';

@Component({
    selector: 'moneteer-envelope-assign-income-modal',
    templateUrl: './envelope-assign-income-modal.component.html',
    styleUrls: ['./envelope-assign-income-modal.component.scss']
})
export class EnvelopeAssignIncomeModalComponent implements OnInit {
    public availableIncomeEnvelope: EnvelopeModel;
    public isBusy: boolean = false;
    public error: string = "";
    public amount: number = 0;
    public toEnvelope: EnvelopeModel;

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
    }

    public submit(): void {
        if (!this.canSubmit()) return;

        this.isBusy = true;

        this.store.dispatch(new MoveBalanceRequestAction({
            fromEnvelopeId: this.availableIncomeEnvelope.id,
            targets: [new EnvelopeBalanceTarget(this.toEnvelope!.id, this.amount)]
        }));
    }

    public canSubmit(): boolean {
        return !!this.toEnvelope &&
            !!this.availableIncomeEnvelope &&
            this.amount > 0 &&
            this.amount <= this.availableIncomeEnvelope.balance &&
            this.toEnvelope.id !== this.availableIncomeEnvelope.id;
    }

}
