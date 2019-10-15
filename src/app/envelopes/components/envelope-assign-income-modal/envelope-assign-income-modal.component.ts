import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { IEnvelopesState, getAllEnvelopes } from 'src/app/core/reducers/envelopes.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EnvelopeModel, EnvelopeBalanceTarget } from 'src/app/core/models';
import { Actions, ofType } from '@ngrx/effects';
import { MoveBalanceRequestAction, EnvelopesActionTypes, MoveBalanceFailureAction } from 'src/app/core/actions/envelopes.actions';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'moneteer-envelope-assign-income-modal',
    templateUrl: './envelope-assign-income-modal.component.html',
    styleUrls: ['./envelope-assign-income-modal.component.scss']
})
export class EnvelopeAssignIncomeModalComponent implements OnInit {
    public isBusy: boolean = false;
    public error: string = "";
    public toEnvelope: EnvelopeModel;
    private _availableIncomeEnvelope: EnvelopeModel;
    public get availableIncomeEnvelope() {
        return this._availableIncomeEnvelope;
    };
    public set availableIncomeEnvelope(newValue: EnvelopeModel) {
        this._availableIncomeEnvelope = newValue;
        const amountControl = this.form.get('amount')
        if (amountControl) {
            amountControl.setValidators([Validators.min(0.01), Validators.max(this.availableIncomeEnvelope ? this.availableIncomeEnvelope.balance : 0)])
        }
    }

    public form = new FormGroup({
        amount: new FormControl(0, [Validators.min(0.01), Validators.max(this.availableIncomeEnvelope ? this.availableIncomeEnvelope.balance : 0)])
    });

    public get amount(): number {
        return this.form.value['amount'];
    }

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
