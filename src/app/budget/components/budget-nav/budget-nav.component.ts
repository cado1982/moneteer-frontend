import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import { AccountModel } from "../../../accounts/models/index";
import { IAccountsState, getOffBudgetAccounts, getBudgetAccounts } from "../../../core/reducers/accounts.reducer";
import { map } from "rxjs/operators";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AccountCreateComponent } from "../account-create/account.create.component";
import { ActivatedRoute } from "@angular/router";
import { sortBy } from "lodash";

@Component({
    selector: "moneteer-budget-nav",
    templateUrl: "./budget-nav.component.html",
    styleUrls: ["./budget-nav.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetNavComponent implements OnInit {
    //public offBudgetAccounts: Observable<Array<AccountModel>>;
    public budgetAccounts: Observable<Array<AccountModel>>;

    constructor(
        private store: Store<IAccountsState>,
        private modalService: NgbModal,
        private activatedRoute: ActivatedRoute
    ) {

    }

    ngOnInit(): void {
        //this.offBudgetAccounts = this.store.pipe(select(getOffBudgetAccounts));
        this.budgetAccounts = this.store.pipe(
            select(getBudgetAccounts),
            map(accounts => sortBy(accounts, "name"))
        );
    }

    public openCreateAccount($event: Event): void {
        $event.stopPropagation();
        let modalRef = this.modalService.open(AccountCreateComponent);
        modalRef.componentInstance.budgetId = this.activatedRoute.snapshot.params.budgetId;
    }
}
