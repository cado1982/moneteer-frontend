
import { first, map, switchMap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, race } from "rxjs";
import { BudgetModel } from "../../core/models/index";
import { Store } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";
import { LoadBudgetsAction, BudgetActionTypes, LoadBudgetsSuccessAction, LoadBudgetsFailureAction } from "../../core/actions/budget.actions";
import { IBudgetsState } from "../../core/reducers/budget.reducer";

@Injectable()
export class BudgetsResolver implements Resolve<Array<BudgetModel>> {
    constructor(private store: Store<IBudgetsState>, private actions$: Actions) {

    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<BudgetModel>> {
        this.store.dispatch(new LoadBudgetsAction());

        const success = this.actions$.pipe(
            ofType(BudgetActionTypes.LoadSuccess),
            map((action: LoadBudgetsSuccessAction) => action.payload.budgets),
            first()
        );

        const failure = this.actions$.pipe(
            ofType(BudgetActionTypes.LoadFailure),
            switchMap((action: LoadBudgetsFailureAction) => Observable.throwError(action.payload.error)),
            first()
        );

        return race(success, failure);
    }
}
