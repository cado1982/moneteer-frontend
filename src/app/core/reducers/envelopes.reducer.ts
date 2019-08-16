import { createSelector } from "@ngrx/store";
import { coreFeatureSelector } from "./feature.selector";
import { EnvelopesActions, EnvelopesActionTypes } from "../actions/envelopes.actions";
import * as _ from "lodash";
import { EnvelopeModel, EnvelopeCategoryModel } from "../models";

export interface IEnvelopesState {
    envelopes: Array<EnvelopeModel>;
    envelopeCategories: Array<EnvelopeCategoryModel>;
    availableIncome: number;
}

const initialState: IEnvelopesState = {
    envelopes: [],
    envelopeCategories: [],
    availableIncome: 0
};

export function envelopesReducer(state: IEnvelopesState = initialState, action: EnvelopesActions): IEnvelopesState {
    switch (action.type) {
        case EnvelopesActionTypes.LoadSuccess:
            return {...state, envelopes: action.payload.envelopes };
        case EnvelopesActionTypes.LoadCategoriesSuccess:
            return {...state, envelopeCategories: action.payload.envelopeCategories};
        case EnvelopesActionTypes.CreateEnvelopeCategorySuccess:
            return {...state, envelopeCategories: [...state.envelopeCategories, action.payload.envelopeCategory]}
        case EnvelopesActionTypes.CreateEnvelopeSuccess:
            return {...state, envelopes: [...state.envelopes, action.payload.envelope]}
        case EnvelopesActionTypes.DeleteEnvelopeSuccess:
            return {...state, envelopes: [...state.envelopes.filter(e => e.id !== action.payload.envelopeId)]}
        case EnvelopesActionTypes.GetAvailableIncomeSuccess:
            return {...state, availableIncome: action.payload.availableIncome}
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

export const getAvailableIncome = createSelector(
    envelopesState,
    state => state.availableIncome
);

export const getEnvelopeCategories = createSelector(
    envelopesState,
    state => state.envelopeCategories
);