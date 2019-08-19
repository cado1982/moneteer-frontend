import { createSelector } from "@ngrx/store";
import { coreFeatureSelector } from "./feature.selector";
import { EnvelopesActions, EnvelopesActionTypes } from "../actions/envelopes.actions";
import * as _ from "lodash";
import { EnvelopeModel, EnvelopeCategoryModel } from "../models";

export interface IEnvelopesState {
    envelopes: Array<EnvelopeModel>;
    envelopeCategories: Array<EnvelopeCategoryModel>
}

const initialState: IEnvelopesState = {
    envelopes: [],
    envelopeCategories: []
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
    state => state.envelopes.filter(e => e.name !== "Available Income" && e.envelopeCategory.name !== "Income")
);

export const getAvailableIncomeEnvelope = createSelector(
    envelopesState,
    state => state.envelopes.find(e => e.name === "Available Income" && e.envelopeCategory.name === "Income")
);

export const getEnvelopeCategories = createSelector(
    envelopesState,
    state => state.envelopeCategories.filter(e => e.name !== "Income")
);