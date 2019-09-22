import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TransactionModel, AccountModel } from '../../models';
import { TransactionAssignmentModel } from '../../models/transaction.assignment.model';
import { Store } from '@ngrx/store';
import { ITransactionsState } from 'src/app/core/reducers/transactions.reducer';
import { HideCreateTransactionAction, CreateTransactionAction } from 'src/app/core/actions/transactions.actions';
import { TransactionEditComponent } from '../transaction-edit/transaction-edit.component';

@Component({
    selector: 'moneteer-transaction-create',
    templateUrl: './transaction-create.component.html',
    styleUrls: ['./transaction-create.component.scss']
})
export class TransactionCreateComponent implements OnInit {
    @Input() public currentAccountId: string;
    public transaction: TransactionModel;

    @ViewChild(TransactionEditComponent, { static: true }) public transactionEditComponent: TransactionEditComponent;
    
    constructor(public store: Store<ITransactionsState>) {
        this.resetTransaction();
    }

    ngOnInit() {
    }

    private resetTransaction(): void {
        this.transaction = new TransactionModel();
        this.transaction.assignments = [new TransactionAssignmentModel()];
        this.transaction.date = new Date();
    }

    public create(): void {
        const transaction = this.transactionEditComponent.getEditedTransaction();

        this.store.dispatch(new CreateTransactionAction({ transaction: transaction }));
    }

    public cancel(): void {
        this.store.dispatch(new HideCreateTransactionAction());
    }
}
