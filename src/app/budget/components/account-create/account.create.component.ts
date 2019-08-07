import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, Subject } from "rxjs";

import { AccountModel } from "../../../accounts/models/index";
import { HideCreateAccountAction, CreateAccountAction, AccountsActionTypes, CreateAccountFailureAction } from "../../../core/actions/accounts.actions";
import { IAccountsState, getShowCreate, getIsCreating } from "../../../core/reducers/accounts.reducer";
import { Actions, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "moneteer-account-create",
    templateUrl: "./account.create.component.html",
    styleUrls: ["./account.create.component.scss"]
})
export class AccountCreateComponent implements OnInit {
    public accountName: string;
    public isBudget = true;
    public initialBalance = 0;
    public budgetId: string;

    public isOpen$: Observable<boolean>;
    public isCreating$: Observable<boolean>;
    public error$: Subject<string> = new Subject<string>();

    constructor(private store: Store<IAccountsState>,
                private actions$: Actions,
                public modal: NgbActiveModal) { }

    public ngOnInit(): void {
        this.isOpen$ = this.store.select(getShowCreate);
        this.isCreating$ = this.store.select(getIsCreating);

        this.actions$.pipe(
            ofType(AccountsActionTypes.CreateFailure),
            map((action: CreateAccountFailureAction) => action.payload.error)
        ).subscribe(error => this.error$.next(error));

        this.actions$.pipe(
            ofType(AccountsActionTypes.CreateSuccess)
        ).subscribe(() => this.modal.close());
    }

    public create(): void {
        const account: AccountModel = new AccountModel();
        account.name = this.accountName;
        account.isBudget = this.isBudget;
        account.initialBalance = this.initialBalance;
        account.budgetId = this.budgetId;

        this.store.dispatch(new CreateAccountAction({account}));
    }
}
