import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TransactionModel, AccountModel } from '../../models';
import { TransactionAssignmentModel } from '../../models/transaction.assignment.model';
import { Store } from '@ngrx/store';
import { ITransactionsState, getIsCreating } from 'src/app/core/reducers/transactions.reducer';
import { HideCreateTransactionAction, CreateTransactionAction, TransactionsActionTypes, CreateTransactionFailureAction } from 'src/app/core/actions/transactions.actions';
import { TransactionEditComponent } from '../transaction-edit/transaction-edit.component';
import { Observable } from 'rxjs';
import { TransactionCreateModel } from 'src/app/core/models/transaction.create.model';
import { Actions, ofType } from '@ngrx/effects';

@Component({
    selector: 'moneteer-transaction-create',
    templateUrl: './transaction-create.component.html',
    styleUrls: ['./transaction-create.component.scss']
})
export class TransactionCreateComponent implements OnInit {
    @Input() public currentAccountId: string;
    public transaction: TransactionModel;
    public isCreating$: Observable<boolean>;
    public errorMessage: string = "";

    @ViewChild(TransactionEditComponent, { static: true }) public transactionEditComponent: TransactionEditComponent;
    
    constructor(public store: Store<ITransactionsState>, public actions$: Actions) {
        this.resetTransaction();
    }

    ngOnInit() {
        this.isCreating$ = this.store.select(getIsCreating);

        this.actions$.pipe(
            ofType(TransactionsActionTypes.CreateTransactionFailure)
        ).subscribe((action: CreateTransactionFailureAction) => {
            this.errorMessage = action.payload.error
        })
    }

    private resetTransaction(): void {
        this.transaction = new TransactionModel();
        this.transaction.assignments = [new TransactionAssignmentModel()];
        this.transaction.date = new Date();
    }

    public create(): void {
        const transaction = this.transactionEditComponent.getEditedTransaction();

        if (!transaction.account) throw new Error("Transaction must have an account");

        let request = new TransactionCreateModel();
        request.accountId = transaction.account.id;
        request.assignments = transaction.assignments;
        request.date = transaction.date;
        request.isCleared = transaction.isCleared;
        request.description = transaction.description;

        this.errorMessage = "";

        this.store.dispatch(new CreateTransactionAction({ request }));
    }

    public cancel(): void {
        this.store.dispatch(new HideCreateTransactionAction());
    }
}
