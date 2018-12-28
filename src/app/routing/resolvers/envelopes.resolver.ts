
import { first, map } from "rxjs/operators";
import {empty as observableEmpty, Observable, race } from "rxjs";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AccountModel } from "../../accounts/models/index";
import { Store, select } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";
import { IAccountsState } from "../../core/reducers/accounts.reducer";
import { LoadAccountsAction, AccountsActionTypes, LoadAccountsSuccessAction } from "../../core/actions/accounts.actions";
import { IEnvelopesState } from "../../core/reducers/envelopes.reducer";
import { LoadEnvelopesAction, EnvelopesActionTypes, LoadEnvelopesSuccessAction, LoadEnvelopesFailureAction } from "../../core/actions/envelopes.actions";
import { EnvelopeModel } from "../../core/models";
import { switchMap } from "rxjs/internal/operators/switchMap";

@Injectable()
export class EnvelopesResolver implements Resolve<Array<EnvelopeModel>> {

    constructor(private store: Store<IEnvelopesState>, private actions$: Actions) {

    }

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<EnvelopeModel>> {
        if (!route.parent || !route.parent.parent || !route.parent.parent.params || !route.parent.parent.params.budgetId) {
            throw new Error("Unable to find budgetId from route");
        }
        const budgetId: string = route.parent.parent.params.budgetId;
        
        this.store.dispatch(new LoadEnvelopesAction({budgetId}));

        const success =  this.actions$.pipe(
            ofType(EnvelopesActionTypes.LoadSuccess),
            map((action: LoadEnvelopesSuccessAction) => action.payload.envelopes),
            first()
        );

        const failure = this.actions$.pipe(
            ofType(EnvelopesActionTypes.LoadFailure),
            switchMap((action: LoadEnvelopesFailureAction) => Observable.throwError(action.payload.error)),
            first()
        );

        return race(success, failure);
    }
}
