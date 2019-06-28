import { Component, OnInit } from "@angular/core";


import { Store } from "@ngrx/store";
import { ITransactionsState } from "../../../core/reducers/transactions.reducer";
import { ShowCreateAccountAction } from "src/app/core/actions/accounts.actions";


@Component({
    selector: "moneteer-transaction-list-no-accounts",
    templateUrl: "./transaction.list.no.accounts.component.html",
    styleUrls: ["./transaction.list.no.accounts.component.scss"],
    
})
export class TransactionListNoAccountsComponent implements OnInit {

    constructor(
        private store: Store<ITransactionsState>) {

    }

    public ngOnInit(): void {
               
    }

    public createAccount(): void {
        this.store.dispatch(new ShowCreateAccountAction());
    }
}
