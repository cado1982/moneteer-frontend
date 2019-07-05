import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import { AccountModel } from "../../../accounts/models/index";
import { ShowCreateAccountAction } from "../../../core/actions/accounts.actions";
import { IAccountsState, getOffBudgetAccounts, getBudgetAccounts } from "../../../core/reducers/accounts.reducer";
import { map } from "rxjs/operators";

@Component({
    selector: "moneteer-budget-nav",
    templateUrl: "./budget-nav.component.html",
    styleUrls: ["./budget-nav.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetNavComponent implements OnInit {
    public offBudgetAccounts: Observable<Array<AccountModel>>;
    public budgetAccounts: Observable<Array<AccountModel>>;

    constructor(private store: Store<IAccountsState>) {

    }

    ngOnInit(): void {
        this.offBudgetAccounts = this.store.pipe(select(getOffBudgetAccounts));
        this.budgetAccounts = this.store.pipe(
            select(getBudgetAccounts),
            map(accounts => accounts.sort((a, b) => {
                let comparison = 0;
                if (a.name.toUpperCase() > b.name.toUpperCase()) {
                    comparison = 1;
                } else if (a.name < b.name) {
                    comparison = -1;
                }
                return comparison;
            })));
    }

    public openCreateAccount($event: Event): void {
        $event.stopPropagation();
        this.store.dispatch(new ShowCreateAccountAction());
    }
}
