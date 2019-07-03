
import { first, map, switchMap } from "rxjs/operators";
import {empty as observableEmpty, Observable, race } from "rxjs";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AccountModel } from "../../accounts/models/index";
import { Store, select } from "@ngrx/store";
import { IState } from "../../reducers";
import { Actions, ofType } from "@ngrx/effects";
import { IAccountsState } from "../../core/reducers/accounts.reducer";
import { LoadAllAccountsAction, AccountsActionTypes, LoadAllAccountsSuccessAction, LoadAllAccountsFailureAction } from "../../core/actions/accounts.actions";

@Injectable()
export class AccountsResolver implements Resolve<Array<AccountModel>> {

    constructor(private store: Store<IAccountsState>, private actions$: Actions) {

    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<AccountModel>> {
        if (!route.params || !route.params.budgetId) {
            throw new Error("Unable to find budgetId from route");
        }
        const budgetId: string = route.params.budgetId;

        this.store.dispatch(new LoadAllAccountsAction({budgetId}));

        const success = this.actions$.pipe(
            ofType(AccountsActionTypes.LoadAllSuccess),
            map((action: LoadAllAccountsSuccessAction) => action.payload.accounts),
            first()
        );

        const failure = this.actions$.pipe(
            ofType(AccountsActionTypes.LoadAllFailure),
            switchMap((action: LoadAllAccountsFailureAction) => { throw new Error(action.payload.error) }),
            first()
        );

        return race(success, failure);
    }
}
