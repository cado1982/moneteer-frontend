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
import { getAccounts } from 'src/app/core/reducers/accounts.reducer';
import { getAllEnvelopes } from 'src/app/core/reducers/envelopes.reducer';
import { EnvelopeModel } from 'src/app/core/models';

@Component({
    selector: 'moneteer-transaction-create',
    templateUrl: './transaction-create.component.html',
    styleUrls: ['./transaction-create.component.scss']
})
export class TransactionCreateComponent implements OnInit {
    @Input() public currentAccountId: string;
    public transaction: TransactionModel;
    public errorMessage: string = "";
    @Input() public accounts: AccountModel[];
    @Input() public envelopes: EnvelopeModel[];

    @ViewChild(TransactionEditComponent, { static: true }) public transactionEditComponent: TransactionEditComponent;
    
    constructor(public store: Store<ITransactionsState>, public actions$: Actions) {
        
    }

    ngOnInit() {
        this.actions$.pipe(
            ofType(TransactionsActionTypes.CreateTransactionFailure)
        ).subscribe((action: CreateTransactionFailureAction) => {
            this.errorMessage = action.payload.error
        });

        this.resetTransaction();
    }

    private resetTransaction(): void {
        this.transaction = new TransactionModel();
        this.transaction.account = this.accounts[0];
        var assignment = new TransactionAssignmentModel();
        assignment.envelope = this.envelopes[0];
        this.transaction.assignments = [assignment];
        this.transaction.date = new Date();
    }

    public canCreate(): boolean {
        return this.transactionEditComponent.isValid;
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
