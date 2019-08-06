import { map, switchMap, mergeMap, tap, filter } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { EnvelopesService } from "../services/envelopes.service";
import { EnvelopesActionTypes, LoadEnvelopesSuccessAction, LoadEnvelopesAction, 
         CreateEnvelopeCategoryAction, CreateEnvelopeCategorySuccessAction, CreateEnvelopeCategoryFailureAction, AssignIncomeSuccessAction, AssignIncomeFailureAction, AssignIncomeRequestAction, LoadEnvelopesFailureAction, LoadEnvelopeCategoriesAction, LoadEnvelopeCategoriesSuccessAction, LoadEnvelopeCategoriesFailureAction } from "../actions/envelopes.actions";
import { catchError } from "rxjs/internal/operators/catchError";
import { of } from "rxjs";
import { IEnvelopesState } from "../reducers/envelopes.reducer";
import { getActiveBudget } from "../reducers/budget.reducer";
import { BudgetModel } from "../models";
import { Store } from "@ngrx/store";

@Injectable()
export class EnvelopesEffects {
    constructor(
        private envelopesService: EnvelopesService,
        private actions$: Actions,
        private envelopesStore: Store<IEnvelopesState>
    ) { }

    @Effect() load$ = this.actions$.pipe(
        ofType(EnvelopesActionTypes.Load),
        mergeMap((action: LoadEnvelopesAction) => this.envelopesService.getEnvelopesForBudget(action.payload.budgetId).pipe(
            map(response => new LoadEnvelopesSuccessAction({envelopes: response.envelopes, available: response.available})),
            catchError(error => of(new LoadEnvelopesFailureAction(error)))
        )
    ));

    @Effect() loadCategories$ = this.actions$.pipe(
        ofType(EnvelopesActionTypes.LoadCategories),
        mergeMap((action: LoadEnvelopeCategoriesAction) => this.envelopesService.getEnvelopeCategoriesForBudget(action.payload.budgetId).pipe(
            map(envelopeCategories => new LoadEnvelopeCategoriesSuccessAction({envelopeCategories: envelopeCategories})),
            catchError(error => of(new LoadEnvelopeCategoriesFailureAction(error)))
        )
    ));

    @Effect() createEnvelopeCategory$ = this.actions$.pipe(
        ofType(EnvelopesActionTypes.CreateEnvelopeCategory),
        switchMap((action: CreateEnvelopeCategoryAction) => this.envelopesService.createEnvelopeCategory(action.payload.budgetId, action.payload.envelopeCategory).pipe(
            map(envelopeCategory => new CreateEnvelopeCategorySuccessAction({envelopeCategory})),
            catchError(error => of(new CreateEnvelopeCategoryFailureAction(error)))
        )
    ));

    @Effect() assignIncome$ = this.actions$.pipe(
        ofType(EnvelopesActionTypes.AssignIncomeRequest),
        switchMap((action: AssignIncomeRequestAction) => this.envelopesService.assignIncome(action.payload.budgetId, action.payload.request).pipe(
            map(() => new AssignIncomeSuccessAction()),
            catchError(error => of(new AssignIncomeFailureAction(error)))
        )
    ));w

    @Effect() assignIncomeSuccess$ = this.actions$.pipe(
        ofType(EnvelopesActionTypes.AssignIncomeSuccess),
        switchMap(() => this.envelopesStore.select(getActiveBudget).pipe(
            filter((activeBudget: BudgetModel | null): activeBudget is BudgetModel => activeBudget !== null ),
            map((activeBudget: BudgetModel) => new LoadEnvelopesAction({budgetId: activeBudget.id}))
        )
    ));
}