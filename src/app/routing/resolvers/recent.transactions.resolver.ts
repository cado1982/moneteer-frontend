import { Observable, race } from "rxjs";
import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";
import { map, first, switchMap } from "rxjs/operators";
import { ITransactionsState } from "../../core/reducers/transactions.reducer";
import { TransactionsActionTypes, LoadRecentTransactionsByEnvelopeAction, LoadRecentTransactionsByEnvelopeSuccessAction, LoadRecentTransactionsByEnvelopeFailureAction } from "../../core/actions/transactions.actions";
import { RecentTransactionByEnvelope } from "src/app/core/models/recent.transaction.by.envelope.model";

@Injectable()
export class RecentTransactionsResolver implements Resolve<Array<RecentTransactionByEnvelope>> {
    constructor(private store: Store<ITransactionsState>, private actions$: Actions) {

    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<RecentTransactionByEnvelope>> {
        const budgetId = route.params.budgetId;

        this.store.dispatch(new LoadRecentTransactionsByEnvelopeAction({budgetId}));

        const success = this.actions$.pipe(
            ofType(TransactionsActionTypes.LoadRecentTransactionsByEnvelopeSuccess),
            map((action: LoadRecentTransactionsByEnvelopeSuccessAction) => action.payload.recentTransactions),
            first()
        );

        const failure = this.actions$.pipe(
            ofType(TransactionsActionTypes.LoadRecentTransactionsByEnvelopeFailure),
            switchMap((action: LoadRecentTransactionsByEnvelopeFailureAction) => { throw new Error(action.payload.error) }),
            first()
        );

        return race(success, failure);
    }
}
