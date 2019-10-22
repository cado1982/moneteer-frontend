import { Component, OnInit } from '@angular/core';
import { IEnvelopesState, getVisibleEnvelopes } from 'src/app/core/reducers/envelopes.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EnvelopeModel, EnvelopeBalanceTarget } from 'src/app/core/models';
import { Actions, ofType } from '@ngrx/effects';
import { MoveBalanceRequestAction, EnvelopesActionTypes, MoveBalanceFailureAction } from 'src/app/core/actions/envelopes.actions';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';

@Component({
    selector: 'moneteer-envelope-move-balance-modal',
    templateUrl: './envelope-move-balance-modal.component.html',
    styleUrls: ['./envelope-move-balance-modal.component.scss']
})
export class EnvelopeMoveBalanceModalComponent implements OnInit {

    public envelopes$: Observable<EnvelopeModel[]>;
    
    public isBusy: boolean = false;
    public error: string = "";
    public amount: number = 0;
    public toEnvelope: EnvelopeModel | undefined;
    public hiddenEnvelopeIds: string[] = []; // Used to hide the fromEnvelope from the list of targets

    private _fromEnvelope: EnvelopeModel;
    public set fromEnvelope(newValue: EnvelopeModel) {
        this._fromEnvelope = newValue;
        this.hiddenEnvelopeIds = [newValue.id];
    }
    public get fromEnvelope(): EnvelopeModel {
        return this._fromEnvelope;
    }

    constructor(
        public modal: NgbActiveModal,
        private store: Store<IEnvelopesState>,
        private actions$: Actions) { }

    ngOnInit() {
        this.envelopes$ = this.store.select(getVisibleEnvelopes);

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
            fromEnvelopeId: this.fromEnvelope.id,
            targets: [new EnvelopeBalanceTarget(this.toEnvelope!.id, this.amount)]
        }));
    }

    public canSubmit(): boolean {
        return !!this.toEnvelope &&
               this.amount > 0 &&
               this.toEnvelope.id !== this.fromEnvelope.id;
    }

}
