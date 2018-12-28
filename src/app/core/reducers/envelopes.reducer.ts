import { AccountsActions, AccountsActionTypes } from "../actions/accounts.actions";
import { AccountModel } from "../../accounts/models";
import { EntityAdapter, createEntityAdapter, EntityState } from "@ngrx/entity";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { coreFeatureSelector } from "./feature.selector";
import { EnvelopesActions, EnvelopesActionTypes } from "../actions/envelopes.actions";
import "rxjs/add/operator/mergeMap";
import * as _ from "lodash";
import { EnvelopeModel } from "../models";

export interface IEnvelopesState {
    envelopes: Array<EnvelopeModel>;
    available: number;
}

const initialState: IEnvelopesState = {
    envelopes: [],
    available: 0
};

export function envelopesReducer(state: IEnvelopesState = initialState, action: EnvelopesActions): IEnvelopesState {
    switch (action.type) {
        case EnvelopesActionTypes.LoadSuccess:
            return {...state, envelopes: action.payload.envelopes, available: action.payload.available };
        default: {
            return state;
        }
    }
}

const envelopesState = createSelector(
    coreFeatureSelector,
    state => state.envelopes
);

export const getEnvelopes = createSelector(
    envelopesState,
    state => state.envelopes
);

export const getAvailable = createSelector(
    envelopesState,
    state => state.available
);