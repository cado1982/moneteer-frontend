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
    styleUrls: ["./transaction.list.component.scss", './../../styles/transaction.scss']
})
export class TransactionListComponent implements OnInit {
    @Input() public transactions$: Observable<TransactionModel[]>;

    public isCreateTransactionOpen$: Observable<boolean>;
    public currentAccountId: string;
    public accounts$: Observable<AccountModel[]>;

    @ViewChildren(TransactionComponent) public transactionComponents: QueryList<TransactionComponent>;

    constructor(
        private store: Store<ITransactionsState>,
        private activatedRoute: ActivatedRoute) {

    }

    public ngOnInit(): void {
        this.activatedRoute.params.subscribe(r => {
            this.currentAccountId = r ? r.accountId : undefined;
        });

        this.isCreateTransactionOpen$ = this.store.select(getIsCreateTransactionOpen);
        this.accounts$ = this.store.select(getAccounts);    
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
}
