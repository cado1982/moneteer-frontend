import { Component, OnInit, Input, ViewChildren, QueryList } from "@angular/core";
import { Observable } from "rxjs";
import { trigger, state, style, animate, transition } from "@angular/animations";

import { TransactionComponent } from "./../transaction/transaction.component";
import { ActivatedRoute } from "@angular/router";

import { TransactionModel, AccountModel } from "../../models/index";
import { Store } from "@ngrx/store";
import { ITransactionsState, getIsCreateTransactionOpen } from "../../../core/reducers/transactions.reducer";
import { TransactionsActionTypes, HideCreateTransactionAction, SelectAllTransactionsAction, DeselectAllTransactionsAction } from "../../../core/actions/transactions.actions";
import { Actions, ofType } from "@ngrx/effects";
import { getAccounts } from "src/app/core/reducers/accounts.reducer";
import { TransactionAssignmentModel } from "../../models/transaction.assignment.model";


@Component({
    selector: "moneteer-transaction-list",
    templateUrl: "./transaction.list.component.html",
    styleUrls: ["./transaction.list.component.scss", './../../styles/transaction.scss'],
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

    public isCreateTransactionOpen$: Observable<boolean>;
    @Input() public transactions$: Observable<TransactionModel[]>;
    public currentAccountId: string;
    public accounts$: Observable<AccountModel[]>;

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

        this.isCreateTransactionOpen$ = this.store.select(getIsCreateTransactionOpen);
        this.accounts$ = this.store.select(getAccounts);

        // this.actions$.pipe(
        //     ofType(TransactionsActionTypes.LoadTransactionsSuccess)
        // ).subscribe(() => {
        //     //Why isn't this getting called?
        //     this.isAnimationDisabled = false;
        // });

        // this.actions$.pipe(
        //     ofType(TransactionsActionTypes.ShowCreateTransaction)
        // ).subscribe(() => {
        //     this.deselectAllTransactions();
        // })        
    }

    public onSelectAll(isSelected: boolean): void {
        if (isSelected) {
            this.store.dispatch(new SelectAllTransactionsAction());
        } else {
            this.store.dispatch(new DeselectAllTransactionsAction());
        }
    }

    public transactionTrackBy(index: number, item: TransactionModel): string {
        return item.id;
    }

    // public onTransactionEditing(transactionId: string) {
    //     for (let i = 0; i < this.transactionComponents.length; i++) {
    //         const transactionComponent: TransactionComponent = this.transactionComponents.toArray()[i];
    //         if (transactionComponent.transaction && transactionComponent.transaction.id !== transactionId) {
    //             transactionComponent.isEditing = false;
    //             transactionComponent.isChecked = false;
    //         }
    //     }
    //     this.store.dispatch(new HideCreateTransactionAction());
    // }

    // private deselectAllTransactions(): void {
    //     for (let i = 0; i < this.transactionComponents.length; i++) {
    //         const transaction: TransactionComponent = this.transactionComponents.toArray()[i];
    //         transaction.isEditing = false;
    //         transaction.isChecked = false;
    //     }
    // }
}
