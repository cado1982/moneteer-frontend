import { Component, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EnvelopeCategoryModel, EnvelopeModel } from 'src/app/core/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITransactionsState } from 'src/app/core/reducers/transactions.reducer';
import { CreateEnvelopeCategoryAction, EnvelopesActionTypes, CreateEnvelopeCategoryFailureAction, CreateEnvelopeFailureAction, CreateEnvelopeAction } from 'src/app/core/actions/envelopes.actions';
import { map } from 'rxjs/operators';

@Component({
    selector: 'moneteer-envelopes-add-modal',
    templateUrl: './envelopes-add-modal.component.html',
    styleUrls: ['./envelopes-add-modal.component.scss']
})
export class EnvelopesAddModalComponent implements OnInit {
    public isBusy: boolean;
    public error: string;
    public budgetId: string;
    public envelopeCategory: EnvelopeCategoryModel;

    public addEnvelopeForm = new FormGroup({
        envelopeName: new FormControl('', [Validators.required, Validators.maxLength(255)])
    });

    private get categoryName(): string {
        return this.addEnvelopeForm.value['envelopeName'];
    }

    constructor(
        public modal: NgbActiveModal,
        private store: Store<ITransactionsState>,
        private actions$: Actions) { }

    ngOnInit() {
        this.actions$.pipe(
            ofType(EnvelopesActionTypes.CreateEnvelopeFailure),
            map((action: CreateEnvelopeFailureAction) => action.payload.error)
        ).subscribe(error => {
            this.isBusy = false;
            this.error = error;
        });

        this.actions$.pipe(
            ofType(EnvelopesActionTypes.CreateEnvelopeSuccess)
        ).subscribe(() => {
            this.isBusy = false;
            this.modal.close();
        })
    }

    public create(): void {
        this.error = "";

        if (!this.budgetId || !this.categoryName) {
            return;
        }

        this.isBusy = true;

        let envelope = new EnvelopeModel(this.categoryName);
        envelope.envelopeCategory = this.envelopeCategory;

        this.store.dispatch(new CreateEnvelopeAction({
            budgetId: this.budgetId,
            envelope: envelope
        }))
    }
}
