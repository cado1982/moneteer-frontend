import { Component, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EnvelopeCategoryModel, EnvelopeModel } from 'src/app/core/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITransactionsState } from 'src/app/core/reducers/transactions.reducer';
import { EnvelopesActionTypes, CreateEnvelopeFailureAction, CreateEnvelopeAction, EditEnvelopeRequestAction, EditEnvelopeFailureAction } from 'src/app/core/actions/envelopes.actions';
import { map } from 'rxjs/operators';
import { getEnvelopeCategories } from 'src/app/core/reducers/envelopes.reducer';
import { Observable } from 'rxjs';

@Component({
    selector: 'moneteer-envelopes-add-modal',
    templateUrl: './envelopes-add-modal.component.html',
    styleUrls: ['./envelopes-add-modal.component.scss']
})
export class EnvelopesAddModalComponent implements OnInit {
    public isBusy: boolean;
    public error: string;
    public envelopeCategory: EnvelopeCategoryModel;
    public envelopeCategories$: Observable<EnvelopeCategoryModel[]>;
    public id: string | undefined;
    public isHidden: boolean;

    public get isCreating(): boolean {
        return !this.id;
    }

    public addEnvelopeForm = new FormGroup({
        envelopeName: new FormControl('', [Validators.required, Validators.maxLength(255)])
    });

    private get envelopeName(): string {
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
            ofType(EnvelopesActionTypes.CreateEnvelopeFailure),
            map((action: EditEnvelopeFailureAction) => action.payload.error)
        ).subscribe(error => {
            this.isBusy = false;
            this.error = error;
        });

        this.actions$.pipe(
            ofType(EnvelopesActionTypes.EditEnvelopeSuccess || EnvelopesActionTypes.CreateEnvelopeSuccess),
        ).subscribe(() => {
            this.isBusy = false;
            this.modal.close();
        });

        this.envelopeCategories$ = this.store.select(getEnvelopeCategories);
    }

    public submit(): void {
        if (!this.envelopeName) {
            return;
        }

        this.error = "";
        this.isBusy = true;

        if (this.isCreating) {
            let envelope = new EnvelopeModel(this.envelopeName);
            envelope.envelopeCategory = this.envelopeCategory;
    
            this.store.dispatch(new CreateEnvelopeAction({envelope}))
        } else {
            let envelope = new EnvelopeModel(this.envelopeName);
            envelope.id = this.id!;
            envelope.isHidden = this.isHidden;
            envelope.envelopeCategory = this.envelopeCategory;

            this.store.dispatch(new EditEnvelopeRequestAction({envelope}));
        }    
    }
}
