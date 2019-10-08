import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TransactionModel, AccountModel } from '../../models';
import { TransactionAssignmentModel } from '../../models/transaction.assignment.model';
import { Store } from '@ngrx/store';
import { ITransactionsState, getIsCreating } from 'src/app/core/reducers/transactions.reducer';
import { HideCreateTransactionAction, CreateTransactionAction, TransactionsActionTypes, CreateTransactionFailureAction } from 'src/app/core/actions/transactions.actions';
import { TransactionEditComponent } from '../transaction-edit/transaction-edit.component';
import { Observable } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';
import { EnvelopeModel } from 'src/app/core/models';
import { ShowErrorModalAction } from 'src/app/core/actions/ui.state.actions';

@Component({
    selector: 'moneteer-transaction-create',
    templateUrl: './transaction-create.component.html',
    styleUrls: ['./transaction-create.component.scss']
})
export class TransactionCreateComponent implements OnInit {
    @Input() public currentAccountId: string;
    public transaction: TransactionModel;
    @Input() public accounts: AccountModel[];
    @Input() public envelopes: EnvelopeModel[];
    public isCreating$: Observable<boolean>;

    @ViewChild(TransactionEditComponent, { static: true }) public transactionEditComponent: TransactionEditComponent;
    
    constructor(public store: Store<ITransactionsState>, public actions$: Actions) {
        
    }

    ngOnInit() {
        this.isCreating$ = this.store.select(getIsCreating);

        this.resetTransaction();
    }

    private resetTransaction(): void {
        this.transaction = new TransactionModel();

        if (this.accounts && this.accounts.length > 0) {
            this.transaction.account = this.accounts[0];
        }

        var assignment = new TransactionAssignmentModel();

        if (this.envelopes && this.envelopes.length > 0) {
            assignment.envelope = this.envelopes[0];
        }

        this.transaction.assignments = [assignment];
        this.transaction.date = new Date();
    }

    public canCreate(): boolean {
        return this.transactionEditComponent.transactionIsValid();
    }

    public create(): void {
        const transaction = this.transactionEditComponent.getEditedTransaction();

        this.store.dispatch(new CreateTransactionAction({ transaction }));
    }

    public cancel(): void {
        this.store.dispatch(new HideCreateTransactionAction());
    }
}
