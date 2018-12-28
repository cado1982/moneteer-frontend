import { map, switchMap, mergeMap, tap, exhaustMap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { BudgetActionTypes, LoadBudgetsAction, DeleteBudgetAction,
         DeleteBudgetSuccessAction, LoadBudgetsSuccessAction,
         CreateBudgetAction, CreateBudgetSuccessAction, LoadBudgetAction, LoadBudgetSuccessAction, DeleteBudgetFailureAction, CreateBudgetFailureAction } from "./../actions/budget.actions";
import { BudgetService } from "../../core/services";
import { catchError } from "rxjs/internal/operators/catchError";
import { of } from "rxjs";

@Injectable()
export class BudgetsEffects {
    constructor(
        private budgetService: BudgetService,
        private actions$: Actions
    ) { }

    @Effect() loadBudgets$ = this.actions$.pipe(
        ofType(BudgetActionTypes.Load),
        switchMap(() => this.budgetService.getAllBudgets().pipe(
            map(budgets => new LoadBudgetsSuccessAction({budgets}))
        )
    ));

    @Effect() deleteBudget$ = this.actions$.pipe(
        ofType(BudgetActionTypes.Delete),
        mergeMap((action: DeleteBudgetAction) => this.budgetService.deleteBudget(action.payload.budget.id).pipe(
            map(budgetId => new DeleteBudgetSuccessAction({budget: action.payload.budget})),
            catchError(err => of(new DeleteBudgetFailureAction(err)))
        )
    ));

    @Effect() createBudget$ = this.actions$.pipe(
        ofType(BudgetActionTypes.Create), 
        mergeMap((action: CreateBudgetAction) => this.budgetService.createBudget(action.payload.budget).pipe(
            map(budget => new CreateBudgetSuccessAction({budget})),
            catchError(err => of(new CreateBudgetFailureAction(err)))
        )
    ));

    @Effect() loadBudget$ = this.actions$.pipe(
        ofType(BudgetActionTypes.LoadBudget),
        map((action: LoadBudgetAction) => action.payload),
        mergeMap(payload => this.budgetService.getBudget(payload.budgetId).pipe(
            map(budget => new LoadBudgetSuccessAction({budget})))
        ));
}