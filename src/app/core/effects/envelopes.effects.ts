import { map, mergeMap, switchMap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { EnvelopesService } from "../services/envelopes.service";
import { EnvelopesActionTypes, LoadEnvelopesSuccessAction, LoadEnvelopesAction, 
         CreateEnvelopeCategoryAction, CreateEnvelopeCategorySuccessAction,
         CreateEnvelopeCategoryFailureAction, LoadEnvelopesFailureAction,
         LoadEnvelopeCategoriesAction, LoadEnvelopeCategoriesSuccessAction,
         LoadEnvelopeCategoriesFailureAction, CreateEnvelopeAction, CreateEnvelopeSuccessAction,
         CreateEnvelopeFailureAction, DeleteEnvelopeAction, DeleteEnvelopeSuccessAction,
         DeleteEnvelopeFailureAction, MoveBalanceRequestAction, MoveBalanceSuccessAction, 
         MoveBalanceFailureAction, HideEnvelopeRequestAction, HideEnvelopeSuccessAction,
         HideEnvelopeFailureAction, ShowEnvelopeRequestAction, ShowEnvelopeSuccessAction,
         ShowEnvelopeFailureAction, EnvelopeCategoryToggleRequestAction, EnvelopeCategoryToggleSuccessAction
} from "../actions/envelopes.actions";
import { catchError } from "rxjs/internal/operators/catchError";
import { of } from "rxjs";

@Injectable()
export class EnvelopesEffects {
    constructor(
        private envelopesService: EnvelopesService,
        private actions$: Actions
    ) { }

    @Effect() load$ = this.actions$.pipe(
        ofType(EnvelopesActionTypes.Load),
        mergeMap((action: LoadEnvelopesAction) => this.envelopesService.getEnvelopesForBudget(action.payload.budgetId).pipe(
            map(envelopes => new LoadEnvelopesSuccessAction({envelopes: envelopes})),
            catchError(error => of(new LoadEnvelopesFailureAction({error})))
        )
    ));

    @Effect() loadCategories$ = this.actions$.pipe(
        ofType(EnvelopesActionTypes.LoadCategories),
        mergeMap((action: LoadEnvelopeCategoriesAction) => this.envelopesService.getEnvelopeCategoriesForBudget(action.payload.budgetId).pipe(
            map(envelopeCategories => new LoadEnvelopeCategoriesSuccessAction({envelopeCategories: envelopeCategories})),
            catchError(error => of(new LoadEnvelopeCategoriesFailureAction({error})))
        )
    ));

    @Effect() createEnvelopeCategory$ = this.actions$.pipe(
        ofType(EnvelopesActionTypes.CreateEnvelopeCategory),
        switchMap((action: CreateEnvelopeCategoryAction) => this.envelopesService.createEnvelopeCategory(action.payload.budgetId, action.payload.envelopeCategory).pipe(
            map(envelopeCategory => new CreateEnvelopeCategorySuccessAction({envelopeCategory})),
            catchError(error => of(new CreateEnvelopeCategoryFailureAction({error})))
        )
    ));

    @Effect() createEnvelope$ = this.actions$.pipe(
        ofType(EnvelopesActionTypes.CreateEnvelope),
        switchMap((action: CreateEnvelopeAction) => this.envelopesService.createEnvelope(action.payload.budgetId, action.payload.envelope).pipe(
            map(envelope => new CreateEnvelopeSuccessAction({envelope})),
            catchError(error => of(new CreateEnvelopeFailureAction({error})))
        )
    ));

    @Effect() deleteEnvelope$ = this.actions$.pipe(
        ofType(EnvelopesActionTypes.DeleteEnvelope),
        switchMap((action: DeleteEnvelopeAction) => this.envelopesService.deleteEnvelope(action.payload.envelopeId).pipe(
            map(envelopeId => new DeleteEnvelopeSuccessAction({envelopeId, balance: action.payload.balance})),
            catchError(error => of(new DeleteEnvelopeFailureAction({error})))
        )
    ));

    @Effect() moveBalance$ = this.actions$.pipe(
        ofType(EnvelopesActionTypes.MoveBalanceRequest),
        switchMap((action: MoveBalanceRequestAction) => this.envelopesService.moveBalance(action.payload.fromEnvelopeId, action.payload.targets).pipe(
            map(() => new MoveBalanceSuccessAction({fromEnvelopeId: action.payload.fromEnvelopeId, targets: action.payload.targets})),
            catchError(error => of(new MoveBalanceFailureAction({error})))
        )
    ));

    @Effect() hideEnvelope$ = this.actions$.pipe(
        ofType(EnvelopesActionTypes.HideEnvelopeRequest),
        switchMap((action: HideEnvelopeRequestAction) => this.envelopesService.hideEnvelope(action.payload.envelopeId).pipe(
            map(() => new HideEnvelopeSuccessAction({envelopeId: action.payload.envelopeId})),
            catchError(error => of(new HideEnvelopeFailureAction({error})))
        )
    ));

    @Effect() showEnvelope$ = this.actions$.pipe(
        ofType(EnvelopesActionTypes.ShowEnvelopeRequest),
        switchMap((action: ShowEnvelopeRequestAction) => this.envelopesService.showEnvelope(action.payload.envelopeId).pipe(
            map(() => new ShowEnvelopeSuccessAction({envelopeId: action.payload.envelopeId})),
            catchError(error => of(new ShowEnvelopeFailureAction({error})))
        )
    ));

    @Effect() envelopeCategoryToggle$ = this.actions$.pipe(
        ofType(EnvelopesActionTypes.EnvelopeCategoryToggleRequest),
        switchMap((action: EnvelopeCategoryToggleRequestAction) => this.envelopesService.updateEnvelopeCategoryIsToggled(action.payload.envelopeCategory.id, !action.payload.envelopeCategory.isToggled).pipe(
            map(() => new EnvelopeCategoryToggleSuccessAction({envelopeCategory: {...action.payload.envelopeCategory, isToggled: !action.payload.envelopeCategory.isToggled}}))
        )
    ));
}