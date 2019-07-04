import { Component, Input, OnInit } from "@angular/core";

import * as _ from "lodash";

import { AccountModel } from "../../models/index";

@Component({
    selector: "moneteer-transaction-footer",
    templateUrl: "./transaction.footer.component.html",
    styleUrls: ["./transaction.footer.component.scss"]
})
export class TransactionFooterComponent implements OnInit {
    @Input() public account: AccountModel;
    @Input() public accounts: AccountModel[];
    public get accountsUncleared(): number {
        let uncleared = 0;
        this.accounts.forEach(account => {
            uncleared = uncleared + account.unclearedBalance
        });
        return uncleared;
    }
    public get accountsCleared(): number {
        let cleared = 0;
        this.accounts.forEach(account => {
            cleared = cleared + account.clearedBalance
        });
        return cleared;
    }

    ngOnInit(): void {

    }
}
