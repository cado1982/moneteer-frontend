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
        const updatedTransaction = this.transactionEditComponent.getEditedTransaction();

        this.store.dispatch(new UpdateTransactionAction({ transaction: updatedTransaction }));
    }

    public cancel(): void {
        this.isEditing = false;
        this.isChecked = false;
    }

    public beginEdit(): void {
        this.isEditing = true;
        this.editing.emit();
    }
}
