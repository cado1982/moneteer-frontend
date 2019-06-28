import {combineLatest as observableCombineLatest, empty as observableEmpty,  Observable, combineLatest } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { TransactionModel, AccountModel } from "../../models/index";
import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { ITransactionsState, getTransactions } from "../../../core/reducers/transactions.reducer";
import { TransactionListComponent } from "../transaction-list/transaction.list.component";
import { Actions, ofType } from "@ngrx/effects";
import { TransactionsActionTypes } from "src/app/core/actions/transactions.actions";
import { tap, map } from "rxjs/operators";
import { getAccounts } from "src/app/core/reducers/accounts.reducer";

@Component({
    selector: "moneteer-accounts-detail",
    templateUrl: "./accounts.detail.component.html",
    styleUrls: ["./accounts.detail.component.scss"],
})

export class AccountsDetailComponent implements OnInit {
    public transactions$: Observable<TransactionModel[]>;
    public account$: Observable<AccountModel | null>;

    constructor(
        private store: Store<ITransactionsState>,
        private activatedRoute: ActivatedRoute,
    ) {

    }

    public ngOnInit(): void {
        this.transactions$ = this.store.select(getTransactions);

        this.account$ = combineLatest(this.activatedRoute.params, this.store.pipe(select(getAccounts))).pipe(
            map(value => {
                const params: {[key: string]: any} = value[0];
                const accounts: AccountModel[] = value[1];
    
                const accountId: string | null = params.accountId || null;
    
                if (accountId == null) { 
                    return null
                } else {
                    const account = accounts.find(a => a.id === accountId) || null
                    return account
                }
            })
        )

    }
}
