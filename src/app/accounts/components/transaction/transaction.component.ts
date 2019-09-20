import { Component, Input, ViewChild, Output, EventEmitter, OnChanges, SimpleChanges } from "@angular/core";
import * as _ from "lodash";

import { TransactionModel, AccountModel } from "../../models/index";
import { TransactionEditComponent } from "../transaction-edit/transaction-edit.component";
import { Store } from "@ngrx/store";
import { ITransactionsState } from "src/app/core/reducers/transactions.reducer";
import { UpdateTransactionAction } from "src/app/core/actions/transactions.actions";
import { TransactionAssignmentModel } from "../../models/transaction.assignment.model";
import { EnvelopeModel } from "src/app/core/models";

@Component({
    selector: "moneteer-transaction",
    templateUrl: "./transaction.component.html",
    styleUrls: ["./transaction.component.scss"],
    host: {
        "[class.selected]": "this.isChecked",
        "[class.editing]": "this.isEditing",
    }
})
export class TransactionComponent {
    @Input() public transaction: TransactionModel;
    @Input() public currentAccountId: string;

    @Output() public editing: EventEmitter<string> = new EventEmitter<string>();

    public isEditing: boolean;
    public isChecked: boolean;

    @ViewChild(TransactionEditComponent, { static: true }) public transactionEditComponent: TransactionEditComponent;

    constructor(public store: Store<ITransactionsState>) {

    }

    public save(): void {
        let updatedTransaction = new TransactionModel();
        updatedTransaction.id = this.transaction.id;
        updatedTransaction.date = this.transactionEditComponent.date;
        updatedTransaction.description = this.transactionEditComponent.description;
        updatedTransaction.isCleared = this.transactionEditComponent.isCleared;

        updatedTransaction.account = new AccountModel();

        if (this.currentAccountId) {
            updatedTransaction.account.id = this.currentAccountId;
        } else {
            updatedTransaction.account.id = this.transactionEditComponent.account.id;
        }
        
        updatedTransaction.assignments = [];
        this.transactionEditComponent.assignments.forEach(a => {
            let newAssignment = new TransactionAssignmentModel();
            newAssignment.inflow = a.inflow;
            newAssignment.outflow = a.outflow;
            if (a.envelope) {
                newAssignment.envelope = new EnvelopeModel();
                newAssignment.envelope.id = a.envelope.id;
            }
        })


        this.store.dispatch(new UpdateTransactionAction({ transaction: updatedTransaction }));
    }

    public cancel(): void {
        this.isEditing = false;
    }
}
