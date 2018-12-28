import { map, switchMap, mergeMap, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { AccountsActionTypes, LoadAccountsAction, LoadAccountsSuccessAction,
         CreateAccountAction, CreateAccountSuccessAction } from "../actions/accounts.actions";
import { AccountService } from "../../core/services";
import { EnvelopesService } from "../services/envelopes.service";
import { EnvelopesActionTypes, LoadEnvelopesSuccessAction, LoadEnvelopesAction, 
         CreateEnvelopeCategoryAction, CreateEnvelopeCategorySuccessAction, CreateEnvelopeCategoryFailureAction } from "../actions/envelopes.actions";
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
            map(response => new LoadEnvelopesSuccessAction({envelopes: response.envelopes, available: response.available}))
        )
    ));

    @Effect() createEnvelopeCategory$ = this.actions$.pipe(
        ofType(EnvelopesActionTypes.CreateEnvelopeCategory),
        switchMap((action: CreateEnvelopeCategoryAction) => this.envelopesService.createEnvelopeCategory(action.payload.budgetId, action.payload.envelopeCategory).pipe(
            map(envelopeCategory => new CreateEnvelopeCategorySuccessAction({envelopeCategory})),
            catchError(error => of(new CreateEnvelopeCategoryFailureAction(error)))
        )
    ));

}