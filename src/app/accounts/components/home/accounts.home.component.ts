
import { Observable, combineLatest } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { AccountModel } from "../../models";

@Component({
    selector: "moneteer-accounts-home",
    template: "<router-outlet></router-outlet>",
    styleUrls: ["./accounts.home.component.scss"]
})
export class AccountsHomeComponent implements OnInit {
    public accounts: Observable<Array<AccountModel>>;

    constructor(
        private activatedRoute: ActivatedRoute) {
    }

    public ngOnInit(): void {
        combineLatest(this.activatedRoute.params, this.accounts).subscribe(res => {
            const params: {[key: string]: any} = res[0];
            const accounts: AccountModel[] = res[1];

            const accountId: string = params.accountId || "";
            // this.accountActions.selectAccount(accountId);
        });
    }
}
