
import { first, map } from "rxjs/operators";
import {Observable, race, merge } from "rxjs";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";
import { IEnvelopesState } from "../../core/reducers/envelopes.reducer";
import { LoadEnvelopesAction, EnvelopesActionTypes, LoadEnvelopesSuccessAction, LoadEnvelopesFailureAction, LoadEnvelopeCategoriesAction, LoadEnvelopeCategoriesSuccessAction, LoadEnvelopeCategoriesFailureAction } from "../../core/actions/envelopes.actions";
import { EnvelopeModel } from "../../core/models";
import { } from "rxjs/internal/operators"

@Injectable()
export class EnvelopesResolver implements Resolve<Array<EnvelopeModel>> {

    constructor(private store: Store<IEnvelopesState>, private actions$: Actions) {

    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<EnvelopeModel>> {
        if (!route.params || !route.params.budgetId) {
            throw new Error("Unable to find budgetId from route");
        }
        const budgetId: string = route.params.budgetId;
        
        this.store.dispatch(new LoadEnvelopesAction({budgetId}));
        this.store.dispatch(new LoadEnvelopeCategoriesAction({budgetId}));

        const envelopesSuccess = this.actions$.pipe(
            ofType(EnvelopesActionTypes.LoadSuccess),
            first()
        );

        const categoriesSuccess = this.actions$.pipe(
            ofType(EnvelopesActionTypes.LoadCategoriesSuccess),
            first()
        );
            
        const envelopesFailure = this.actions$.pipe(
            ofType(EnvelopesActionTypes.LoadFailure),
            map((action: LoadEnvelopesFailureAction) => { throw new Error(action.payload.error) }),
            first()
        );

        const categoriesFailure = this.actions$.pipe(
            ofType(EnvelopesActionTypes.LoadCategoriesFailure),
            map((action: LoadEnvelopeCategoriesFailureAction) => { throw new Error(action.payload.error) }),
            first()
        );

        const success = merge(envelopesSuccess, categoriesSuccess);

        return race(success, envelopesFailure, categoriesFailure)
    }
}
