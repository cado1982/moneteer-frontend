import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ITransactionsState } from 'src/app/core/reducers/transactions.reducer';
import { CreateEnvelopeCategoryAction, EnvelopesActionTypes, CreateEnvelopeCategoryFailureAction } from 'src/app/core/actions/envelopes.actions';
import { ActivatedRoute } from '@angular/router';
import { EnvelopeCategoryModel } from 'src/app/core/models';
import { Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

@Component({
    selector: 'moneteer-envelope-add-category-modal',
    templateUrl: './envelope-add-category-modal.component.html',
    styleUrls: ['./envelope-add-category-modal.component.scss']
})
export class EnvelopeAddCategoryModalComponent implements OnInit {
    public isBusy: boolean;
    public error: string;
    public budgetId: string;

    public addCategoryForm = new FormGroup({
        categoryName: new FormControl('', [Validators.required, Validators.maxLength(255)])
    });

    private get categoryName(): string {
        return this.addCategoryForm.value['categoryName'];
    }

    constructor(
        public modal: NgbActiveModal,
        private store: Store<ITransactionsState>,
        private actions$: Actions) { }

    ngOnInit() {
        this.actions$.pipe(
            ofType(EnvelopesActionTypes.CreateEnvelopeCategoryFailure),
            map((action: CreateEnvelopeCategoryFailureAction) => action.payload.error)
        ).subscribe(error => {
            this.isBusy = false;
            this.error = error;
        });

        this.actions$.pipe(
            ofType(EnvelopesActionTypes.CreateEnvelopeCategorySuccess)
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

        this.store.dispatch(new CreateEnvelopeCategoryAction({
            budgetId: this.budgetId,
            envelopeCategory: new EnvelopeCategoryModel(this.categoryName)
        }))
    }
}
