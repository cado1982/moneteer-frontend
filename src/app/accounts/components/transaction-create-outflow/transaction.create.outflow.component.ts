import { Component, OnInit, Input, ViewChild, AfterViewInit } from "@angular/core";

import { TransactionModel, AccountModel, TransactionAssignmentModel } from "../../models";
import { TransactionComponent } from "../transaction/transaction.component";
import { PayeeModel, EnvelopeModel } from "../../../core/models";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { TransactionCreateComponent } from "../transaction.create.component";
import { ITransactionsState } from "../../../core/reducers/transactions.reducer";
import { CreateTransactionAction, HideCreateTransactionAction } from "../../../core/actions/transactions.actions";

@Component({
    selector: "moneteer-transaction-outflow-create",
    templateUrl: "./transaction.create.outflow.component.html",
    styleUrls: ["./transaction.create.outflow.component.scss"]
})
export class TransactionCreateOutflowComponent extends TransactionCreateComponent {
    public envelope: EnvelopeModel | undefined = undefined;
    public outflow: number = 0;
    public assignments: TransactionAssignmentModel[] = [];

    constructor(protected store: Store<ITransactionsState>) {
        super(store);
    }

    public onSelectedEnvelopeChange(envelope: EnvelopeModel): void {
        if (envelope.id === "SplitCategory") {
            this.assignments = [new TransactionAssignmentModel(), new TransactionAssignmentModel()];
        } else {
            this.assignments = [];
        }
    }

    public create(): void {
        if (!this.envelope) return;
        
        if (this.envelope.id !== "SplitCategory") {
            const assignment: TransactionAssignmentModel = new TransactionAssignmentModel();
            assignment.envelope = this.envelope;
            assignment.outflow = this.outflow;
            this.assignments = [assignment];
        }

        const newTransaction = new TransactionModel();
        newTransaction.date = this.date;
        newTransaction.payee = this.payee;
        newTransaction.description = this.description;
        newTransaction.envelope = this.envelope;
        newTransaction.outflow = this.outflow;
        newTransaction.isCleared = this.isCleared;
        newTransaction.assignments = this.assignments;

        if (this.currentAccountId) {
            newTransaction.account = new AccountModel();
            newTransaction.account.id = this.currentAccountId;
        } else if (this.account) {
            newTransaction.account = this.account;
        }

        this.store.dispatch(new CreateTransactionAction({transaction: newTransaction}));
    }

    public canCreate(): boolean {
        return this.outflow > 0 &&
               (!!this.account || !!this.currentAccountId) &&
               !!this.envelope;
    }

    public cancel(): void {
        this.store.dispatch(new HideCreateTransactionAction());
    }
}
