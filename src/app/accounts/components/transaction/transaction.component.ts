import { Component, Input, ViewChild, OnInit } from "@angular/core";
import * as _ from "lodash";
import { Store } from "@ngrx/store";

import { TransactionModel } from "../../models/index";
import { TransactionEditComponent } from "../transaction-edit/transaction-edit.component";
import { ITransactionsState, getIsTransactionSelected, getIsEditingTransaction, getIsSaving } from "src/app/core/reducers/transactions.reducer";
import { UpdateTransactionAction, DeselectTransactionAction, EndEditTransactionAction } from "src/app/core/actions/transactions.actions";
import { Observable } from "rxjs";

@Component({
    selector: "moneteer-transaction",
    templateUrl: "./transaction.component.html",
    styleUrls: ["./transaction.component.scss", './../../styles/transaction.scss'],
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
    public isSaving$: Observable<boolean>;

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

        this.isSaving$ = this.store.select(getIsSaving);
    }
}
