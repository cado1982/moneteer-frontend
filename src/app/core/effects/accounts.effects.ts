import { map, switchMap, mergeMap, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { AccountsActionTypes, LoadAccountsAction, LoadAccountsSuccessAction,
         CreateAccountAction, CreateAccountSuccessAction, CreateAccountFailureAction } from "../actions/accounts.actions";
import { AccountService } from "../../core/services";
import { catchError } from "rxjs/internal/operators/catchError";
import { of } from "rxjs";

@Injectable()
export class AccountsEffects {
    constructor(
        private accountService: AccountService,
        private actions$: Actions
    ) { }

    @Effect() loadAccounts$ = this.actions$.pipe(
        ofType(AccountsActionTypes.Load),
        mergeMap((action: LoadAccountsAction) => this.accountService.getAccounts(action.payload.budgetId).pipe(
            map(accounts => new LoadAccountsSuccessAction({accounts}))
        )
    ));

    @Effect() createAccount$ = this.actions$.pipe(
        ofType(AccountsActionTypes.Create),
        mergeMap((action: CreateAccountAction) => this.accountService.createAccount(action.payload.account).pipe(
            map(account => new CreateAccountSuccessAction({account})),
            catchError(err => of(new CreateAccountFailureAction(err)))
        )
    ));
}