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
import { FormControl, Validators, FormGroup } from "@angular/forms";

@Component({
    selector: "moneteer-account-create",
    templateUrl: "./account.create.component.html",
    styleUrls: ["./account.create.component.scss"]
})
export class AccountCreateComponent implements OnInit {
    public isBudget = true;
    public budgetId: string;
    public isBusy = false;

    public isOpen$: Observable<boolean>;
    public isCreating$: Observable<boolean>;
    public initialBalance: number = 0;
    public error: string;

    public createAccountForm = new FormGroup({
        accountName: new FormControl('', [Validators.required, Validators.maxLength(255)])
    });

    private get accountName(): string {
        return this.createAccountForm.value['accountName'];
    }

    constructor(private store: Store<IAccountsState>,
                private actions$: Actions,
                public modal: NgbActiveModal) { }

    public ngOnInit(): void {
        this.isOpen$ = this.store.select(getShowCreate);
        this.isCreating$ = this.store.select(getIsCreating);

        this.actions$.pipe(
            ofType(AccountsActionTypes.CreateFailure),
            map((action: CreateAccountFailureAction) => action.payload.error)
        ).subscribe(error => {
            this.isBusy = false;
            this.error = error;
        });

        this.actions$.pipe(
            ofType(AccountsActionTypes.CreateSuccess)
        ).subscribe(() => {
            this.isBusy = false;
            this.modal.close();
        });
    }

    public create(): void {

        this.isBusy = true;

        const account: AccountModel = new AccountModel();
        account.name = this.accountName;
        account.isBudget = this.isBudget;
        account.initialBalance = this.initialBalance;
        account.budgetId = this.budgetId;

        this.store.dispatch(new CreateAccountAction({account}));
    }
}
