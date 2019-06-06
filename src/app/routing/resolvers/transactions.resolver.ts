import {empty as observableEmpty, Observable, race } from "rxjs";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { TransactionModel } from "../../accounts/models/index";
import { Store } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";
import { map, first, switchMap } from "rxjs/operators";
import { ITransactionsState } from "../../core/reducers/transactions.reducer";
import { LoadTransactionsAction, TransactionsActionTypes, LoadTransactionsSuccessAction, LoadTransactionsFailureAction } from "../../core/actions/transactions.actions";

@Injectable()
export class TransactionsResolver implements Resolve<Array<TransactionModel>> {
    constructor(private store: Store<ITransactionsState>, private actions$: Actions) {

    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<TransactionModel>> {
        if (!route.parent || !route.parent.parent || !route.parent.parent.params || !route.parent.parent.params.budgetId) {
            throw new Error("Unable to find budgetId from route");
        }
        const budgetId: string = route.parent.parent.params.budgetId;

        this.store.dispatch(new LoadTransactionsAction({budgetId}));

        const success = this.actions$.pipe(
            ofType(TransactionsActionTypes.LoadTransactionsSuccess),
            map((action: LoadTransactionsSuccessAction) => action.payload.transactions),
            first()
        );

        const failure = this.actions$.pipe(
            ofType(TransactionsActionTypes.LoadTransactionsFailure),
            switchMap((action: LoadTransactionsFailureAction) => { throw new Error(action.payload.error) }),
            first()
        );

        return race(success, failure);
    }
}
