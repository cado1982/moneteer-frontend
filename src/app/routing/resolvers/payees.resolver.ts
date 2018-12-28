
import {empty as observableEmpty, Observable, race } from "rxjs";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { PayeeModel } from "../../core/models/index";
import { Store } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";
import { ITransactionsState } from "../../core/reducers/transactions.reducer";
import { LoadPayeesAction, TransactionsActionTypes, LoadPayeesSuccessAction, LoadPayeesFailureAction } from "../../core/actions/transactions.actions";
import { map, first } from "rxjs/operators";
import { switchMap } from "rxjs/internal/operators/switchMap";

@Injectable()
export class PayeesResolver implements Resolve<Array<PayeeModel>> {
    constructor(private store: Store<ITransactionsState>, private actions$: Actions) {
        
    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<PayeeModel>> {
        if (!route.params || !route.params.budgetId) {
            throw new Error("Unable to find budgetId from route");
        }
        const budgetId: string = route.params.budgetId;

        this.store.dispatch(new LoadPayeesAction({budgetId}));

        const success = this.actions$.pipe(
            ofType(TransactionsActionTypes.LoadPayeesSuccess),
            map((action: LoadPayeesSuccessAction) => action.payload.payees),
            first()
        );

        const failure = this.actions$.pipe(
            ofType(TransactionsActionTypes.LoadPayeesFailure),
            switchMap((action: LoadPayeesFailureAction) => Observable.throwError(action.payload.error)),
            first()
        );

        return race(success, failure);
    }
}
