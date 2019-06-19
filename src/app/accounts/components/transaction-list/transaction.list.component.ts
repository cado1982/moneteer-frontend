import { Component, OnInit, Input, ViewChildren, QueryList } from "@angular/core";
import { Observable } from "rxjs";
import { trigger, state, style, animate, transition, query } from "@angular/animations";

import { TransactionComponent } from "./../transaction/transaction.component";
import { ActivatedRoute } from "@angular/router";

import { TransactionModel } from "../../models/index";
import { Store } from "@ngrx/store";
import { ITransactionsState, getIsCreateInflowTransactionOpen, getIsCreateOutflowTransactionOpen } from "../../../core/reducers/transactions.reducer";
import { TransactionsActionTypes } from "../../../core/actions/transactions.actions";
import { Actions, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";


@Component({
    selector: "moneteer-transaction-list",
    templateUrl: "./transaction.list.component.html",
    styleUrls: ["./transaction.list.component.scss"],
    animations: [
        trigger("createTransactionVisible", [
            state("true", style({
                height: "*",
                opacity: 1
            })),
            state("false", style({
                height: "0",
                opacity: 0,
                display: "none"
            })),
            transition("* <=> *", animate("150ms ease-out"))
        ])
    ]
})
export class TransactionListComponent implements OnInit {

    public isCreateInflowTransactionOpen$: Observable<boolean>;
    public isCreateOutflowTransactionOpen$: Observable<boolean>;
    @Input() public transactions$: Observable<TransactionModel[]>;
    public currentAccountId: string;
    public isAnimationDisabled: boolean = true;

    @ViewChildren(TransactionComponent) public transactionComponents: QueryList<TransactionComponent>;

    constructor(
        private store: Store<ITransactionsState>,
        private actions$: Actions,
        private activatedRoute: ActivatedRoute) {

    }

    public ngOnInit(): void {
        this.activatedRoute.params.subscribe(r => {
            this.currentAccountId = r ? r.accountId : undefined;
        });

        this.isCreateInflowTransactionOpen$ = this.store.select(getIsCreateInflowTransactionOpen);
        this.isCreateOutflowTransactionOpen$ = this.store.select(getIsCreateOutflowTransactionOpen);

        this.actions$.pipe(
            ofType(TransactionsActionTypes.LoadTransactionsSuccess)
        ).subscribe(() => {
            //Why isn't this getting called?
            this.isAnimationDisabled = false;
            console.log("Animations enabled")
        });

        this.actions$.pipe(
            ofType(TransactionsActionTypes.ShowCreateTransaction)
        ).subscribe(() => {
            this.deselectAllTransactions();
        })        
    }

    public onSelectAll(isSelected: boolean): void {
        for (let i = 0; i < this.transactionComponents.length; i++) {
            const transaction: TransactionComponent = this.transactionComponents.toArray()[i];
            transaction.isChecked = isSelected;
        }
    }

    public transactionTrackBy(index: number, item: TransactionModel): string {
        return item.id;
    }

    public onTransactionEditing(transactionId: string) {
        for (let i = 0; i < this.transactionComponents.length; i++) {
            const transaction: TransactionComponent = this.transactionComponents.toArray()[i];
            if (transaction.transaction.id !== transactionId) {
                transaction.isEditing = false;
                transaction.isChecked = false;
            }
        }
    }

    private deselectAllTransactions(): void {
        for (let i = 0; i < this.transactionComponents.length; i++) {
            const transaction: TransactionComponent = this.transactionComponents.toArray()[i];
            transaction.isEditing = false;
            transaction.isChecked = false;
        }
    }
}
