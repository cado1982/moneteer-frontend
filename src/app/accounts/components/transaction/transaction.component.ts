import { Component, Input, ViewChild, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from "@angular/core";
import * as _ from "lodash";

import { TransactionModel, AccountModel } from "../../models/index";
import { TransactionEditComponent } from "../transaction-edit/transaction-edit.component";
import { Store } from "@ngrx/store";
import { ITransactionsState, getIsTransactionSelected, getEditingTransaction, getIsEditingTransaction } from "src/app/core/reducers/transactions.reducer";
import { UpdateTransactionAction, DeselectTransactionAction, BeginEditTransactionAction, EndEditTransactionAction } from "src/app/core/actions/transactions.actions";
import { TransactionAssignmentModel } from "../../models/transaction.assignment.model";
import { EnvelopeModel } from "src/app/core/models";
import { Observable } from "rxjs";

@Component({
    selector: "moneteer-transaction",
    templateUrl: "./transaction.component.html",
    styleUrls: ["./transaction.component.scss"],
    host: {
        "[class.selected]": "this.isSelected",
        "[class.editing]": "this.isEditing",
    }
})
export class TransactionComponent implements OnInit {
    
    @Input() public transaction: TransactionModel;
    @Input() public currentAccountId: string;

    public isEditing: boolean;
    public isSelected: boolean;

    @ViewChild(TransactionEditComponent, { static: true }) public transactionEditComponent: TransactionEditComponent;

    constructor(public store: Store<ITransactionsState>) {

    }

    public save(): void {
        const updatedTransaction = this.transactionEditComponent.getEditedTransaction();

        this.store.dispatch(new UpdateTransactionAction({ transaction: updatedTransaction }));
    }

    public cancel(): void {
        this.store.dispatch(new DeselectTransactionAction({ transactionId: this.transaction.id }));
        this.store.dispatch(new EndEditTransactionAction());
    }

    ngOnInit(): void {
        this.store.select(getIsTransactionSelected, { transactionId: this.transaction.id}).subscribe(t => {
            this.isSelected = t;
        });
        
        this.store.select(getIsEditingTransaction, { transactionId: this.transaction.id }).subscribe(t => {
            this.isEditing = t;
        })
    }
}
