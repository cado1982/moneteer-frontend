import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import { AccountModel } from "../../../accounts/models/index";
import { ShowCreateAccountAction } from "../../../core/actions/accounts.actions";
import { IAccountsState, getOffBudgetAccounts, getBudgetAccounts } from "../../../core/reducers/accounts.reducer";

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
        this.budgetAccounts = this.store.pipe(select(getBudgetAccounts));
    }

    public openCreateAccount($event: Event): void {
        $event.stopPropagation();
        this.store.dispatch(new ShowCreateAccountAction());
    }
}
