import { createSelector } from "@ngrx/store";
import { coreFeatureSelector } from "./feature.selector";
import { EnvelopesActions, EnvelopesActionTypes } from "../actions/envelopes.actions";
import * as _ from "lodash";
import { EnvelopeModel, EnvelopeCategoryModel } from "../models";

export interface IEnvelopesState {
    envelopes: Array<EnvelopeModel>;
    envelopeCategories: Array<EnvelopeCategoryModel>;
    available: number;
}

const initialState: IEnvelopesState = {
    envelopes: [],
    envelopeCategories: [],
    available: 0
};

export function envelopesReducer(state: IEnvelopesState = initialState, action: EnvelopesActions): IEnvelopesState {
    switch (action.type) {
        case EnvelopesActionTypes.LoadSuccess:
            return {...state, envelopes: action.payload.envelopes, available: action.payload.available };
        case EnvelopesActionTypes.LoadCategoriesSuccess:
            return {...state, envelopeCategories: action.payload.envelopeCategories};
        case EnvelopesActionTypes.CreateEnvelopeCategorySuccess:
            return {...state, envelopeCategories: [...state.envelopeCategories, action.payload.envelopeCategory]}
        case EnvelopesActionTypes.CreateEnvelopeSuccess:
            return {...state, envelopes: [...state.envelopes, action.payload.envelope]}
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

export const getEnvelopeCategories = createSelector(
    envelopesState,
    state => state.envelopeCategories
);

export const getEnvelopeCategoryById = createSelector(
    getEnvelopeCategories,
    (categories: EnvelopeCategoryModel[], props) => categories.find(c => c.id === props.categoryId)
)