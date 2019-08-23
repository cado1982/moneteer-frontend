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

    public get uncleared(): number {
        let uncleared = 0;

        if (!!this.account) {
            uncleared = this.account.unclearedBalance;
        } else {
            if (!this.accounts) {
                uncleared = 0;
            } else {
                this.accounts.forEach(account => {
                    uncleared = uncleared + account.unclearedBalance
                });
            }
        }

        return uncleared;
    }
    public get cleared(): number {
        let cleared = 0;

        if (!!this.account) {
            cleared = this.account.clearedBalance;
        } else {
            if (!this.accounts) {
                cleared = 0;
            } else {
                this.accounts.forEach(account => {
                    cleared = cleared + account.clearedBalance
                });
            }
        }

        return cleared;
    }
    public get working(): number {
        return this.uncleared + this.cleared;
    }

    ngOnInit(): void {

    }
}
