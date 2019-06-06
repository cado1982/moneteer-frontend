import { Component, OnInit, Input, ViewChild, AfterViewInit } from "@angular/core";

import { TransactionModel, AccountModel, TransactionAssignmentModel } from "../../models";
import { TransactionComponent } from "../transaction/transaction.component";
import { PayeeModel, EnvelopeModel } from "../../../core/models";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { TransactionCreateComponent } from "../transaction.create.component";
import { CreateTransactionAction, HideCreateTransactionAction } from "../../../core/actions/transactions.actions";
import { ITransactionsState } from "../../../core/reducers/transactions.reducer";

@Component({
    selector: "moneteer-transaction-inflow-create",
    templateUrl: "./transaction.create.inflow.component.html",
    styleUrls: ["./transaction.create.inflow.component.scss"]
})
export class TransactionCreateInflowComponent extends TransactionCreateComponent {
    public inflow: number = 0;

    constructor(protected store: Store<ITransactionsState>) {
        super(store);
    }

    public create(): void {
        const newTransaction = new TransactionModel();
        newTransaction.date = this.date;
        newTransaction.payee = this.payee;
        newTransaction.description = this.description;
        newTransaction.envelope = undefined;
        newTransaction.outflow = 0;
        newTransaction.inflow = this.inflow;
        newTransaction.isCleared = this.isCleared;
        newTransaction.assignments = [];

        if (this.currentAccountId) {
            newTransaction.account = new AccountModel();
            newTransaction.account.id = this.currentAccountId;
        } else if (this.account) {
            newTransaction.account = this.account;
        }
        
        this.store.dispatch(new CreateTransactionAction({transaction: newTransaction}));
    }

    public canCreate(): boolean {
        return this.inflow > 0 &&
               (!!this.account || !!this.currentAccountId);
    }

    public cancel(): void {
        this.store.dispatch(new HideCreateTransactionAction());
    }
}
