import { Component, Input, OnInit } from "@angular/core";

import * as _ from "lodash";

import { TransactionModel } from "../../models/index";

import { Observable } from "rxjs";

@Component({
  selector: "moneteer-transaction-footer",
  templateUrl: "./transaction.footer.component.html",
  styleUrls: ["./transaction.footer.component.scss"]
})
export class TransactionFooterComponent implements OnInit {
    @Input() public transactions: Observable<Array<TransactionModel>>;
    
    public cleared: number;
    public uncleared: number;
    public balance: number;

    ngOnInit(): void {
        this.cleared = 0; // this.store.select(fromAccounts.getClearedTransactions).map(t => t.map(tr => tr.inflow - tr.outflow).sum());
        this.uncleared = 0; // this.store.select(fromAccounts.getUnclearedTransactions).map(t => t.map(tr => tr.inflow - tr.outflow).sum());
        this.balance = 0; // Observable.combineLatest(this.cleared, this.uncleared).map(data => data[0] + data[1]);
    }
}
