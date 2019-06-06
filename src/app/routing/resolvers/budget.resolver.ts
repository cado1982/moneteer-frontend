
import { empty as observableEmpty, Observable, race } from "rxjs";
import { first, map, switchMap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { BudgetModel } from "../../core/models/index";
 
import { Store } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";
import { IBudgetsState } from "../../core/reducers/budget.reducer";
import { LoadBudgetAction, BudgetActionTypes, LoadBudgetSuccessAction, LoadBudgetFailureAction } from "../../core/actions/budget.actions";

@Injectable()
export class BudgetResolver implements Resolve<BudgetModel> {

    constructor(private store: Store<IBudgetsState>, private actions$: Actions) {

    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BudgetModel> {
        if (!route.params || !route.params.budgetId) {
            throw new Error("Unable to find budgetId from route");
        }
        const budgetId: string = route.params.budgetId;

        this.store.dispatch(new LoadBudgetAction({budgetId: budgetId}));

        const success = this.actions$.pipe(
            ofType(BudgetActionTypes.LoadBudgetSuccess),
            map((action: LoadBudgetSuccessAction) => action.payload.budget),
            first()
        );

        const failure = this.actions$.pipe(
            ofType(BudgetActionTypes.LoadBudgetFailure),
            switchMap((action: LoadBudgetFailureAction) => { throw new Error(action.payload.error) }),
            first()
        );

        return race(success, failure);
    }
}
