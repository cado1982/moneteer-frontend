import { map, switchMap, mergeMap, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { AccountsActionTypes, LoadAllAccountsAction, LoadAllAccountsSuccessAction,
         CreateAccountAction, CreateAccountSuccessAction, CreateAccountFailureAction,
         LoadSingleAccountAction, LoadSingleAccountSuccessAction,
         LoadAllAccountsFailureAction, LoadSingleAccountFailureAction } from "../actions/accounts.actions";
import { AccountService } from "../../core/services";
import { catchError } from "rxjs/internal/operators/catchError";
import { of } from "rxjs";
import { LoadEnvelopesAction } from "../actions/envelopes.actions";

@Injectable()
export class AccountsEffects {
    constructor(
        private accountService: AccountService,
        private actions$: Actions
    ) { }

    @Effect() loadAllAccounts$ = this.actions$.pipe(
        ofType(AccountsActionTypes.LoadAll),
        mergeMap((action: LoadAllAccountsAction) => this.accountService.getAccounts(action.payload.budgetId).pipe(
            map(accounts => new LoadAllAccountsSuccessAction({accounts})),
            catchError(err => of(new LoadAllAccountsFailureAction(err)))
        )
    ));

    @Effect() loadSingleAccount$ = this.actions$.pipe(
        ofType(AccountsActionTypes.LoadSingle),
        mergeMap((action: LoadSingleAccountAction) => this.accountService.getAccount(action.payload.accountId).pipe(
            map(account => new LoadSingleAccountSuccessAction({account})),
            catchError(err => of(new LoadSingleAccountFailureAction(err)))
        )
    ));

    @Effect() createAccount$ = this.actions$.pipe(
        ofType(AccountsActionTypes.Create),
        mergeMap((action: CreateAccountAction) => this.accountService.createAccount(action.payload.account).pipe(
            map(account => new CreateAccountSuccessAction({account})),
            catchError(err => of(new CreateAccountFailureAction(err)))
        )
    ));

    @Effect() createAccountSuccess$ = this.actions$.pipe(
        ofType(AccountsActionTypes.CreateSuccess),
        switchMap((action: CreateAccountSuccessAction) => [
            new LoadSingleAccountAction({ accountId: action.payload.account.id }),
            new LoadEnvelopesAction({ budgetId: action.payload.account.budgetId })
        ])
    )
}