import {combineLatest as observableCombineLatest, empty as observableEmpty,  Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { TransactionModel } from "../../models/index";
import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { ITransactionsState, getTransactions } from "../../../core/reducers/transactions.reducer";
import { TransactionListComponent } from "../transaction-list/transaction.list.component";

@Component({
    selector: "moneteer-accounts-detail",
    templateUrl: "./accounts.detail.component.html",
    styleUrls: ["./accounts.detail.component.scss"],
})

export class AccountsDetailComponent implements OnInit {
    public transactions: Observable<TransactionModel[]>;

    constructor(
        private route: ActivatedRoute,
        private store: Store<ITransactionsState>) {

    }

    public ngOnInit(): void {
        this.transactions = this.store.select(getTransactions);

    }
}
