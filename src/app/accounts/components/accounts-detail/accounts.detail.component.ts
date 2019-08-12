import { combineLatest, Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { TransactionModel, AccountModel } from "../../models/index";
import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { ITransactionsState, getTransactions } from "../../../core/reducers/transactions.reducer";
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
    public accounts$: Observable<AccountModel[]>;

    constructor(
        private store: Store<ITransactionsState>,
        private activatedRoute: ActivatedRoute,
    ) {

    }

    public ngOnInit(): void {
        this.transactions$ = this.store.select(getTransactions).pipe(
            map(transactions => transactions.sort((a, b) => {
                let comparison = 0;
                if (a.date > b.date) {
                    comparison = 1;
                } else if (a.date < b.date) {
                    comparison = -1;
                } else if (a.id > b.id) {
                    comparison = 1;
                } else if (a.id < b.id) {
                    comparison = -1;
                }
                return comparison;
            })
        ));

        this.account$ = combineLatest(this.activatedRoute.params, this.store.pipe(select(getAccounts))).pipe(
            map(([params, accounts]) => {
                const accountId: string | null = params.accountId || null;
    
                if (accountId == null) { 
                    return null
                } else {
                    const account = accounts.find(a => a.id === accountId) || null
                    return account
                }
            })
        );

        this.accounts$ = this.store.select(getAccounts);
    }
}
