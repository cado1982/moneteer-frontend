import { createSelector } from "@ngrx/store";
import { coreFeatureSelector } from "./feature.selector";
import { EnvelopesActions, EnvelopesActionTypes, HideEnvelopeSuccessAction,
    ShowEnvelopeSuccessAction, MoveBalanceSuccessAction, DeleteEnvelopeSuccessAction,
    EnvelopeCategoryToggleRequestAction, 
    EditEnvelopeSuccessAction} from "../actions/envelopes.actions";
import * as _ from "lodash";
import { EnvelopeModel, EnvelopeCategoryModel } from "../models";

export interface IEnvelopesState {
    envelopes: Array<EnvelopeModel>;
    envelopeCategories: Array<EnvelopeCategoryModel>
    selectedEnvelopeId: string | undefined
}

const initialState: IEnvelopesState = {
    envelopes: [],
    envelopeCategories: [],
    selectedEnvelopeId: undefined
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
            return {...state, envelopes: [...state.envelopes, action.payload.envelope], selectedEnvelopeId: action.payload.envelope.id}
        case EnvelopesActionTypes.DeleteEnvelopeSuccess:
            return deleteEnvelopeSuccesMutator(state, action);
        case EnvelopesActionTypes.HideEnvelopeSuccess:
            return hideEnvelopeSuccessMutator(state, action);
        case EnvelopesActionTypes.ShowEnvelopeSuccess:
            return showEnvelopeSuccessMutator(state, action);
        case EnvelopesActionTypes.EnvelopeCategoryToggleRequest:
            return updateEnvelopeCategoryToggleMutator(state, action);
        case EnvelopesActionTypes.SelectEnvelope:
            return {...state, selectedEnvelopeId: action.payload.envelopeId};
        case EnvelopesActionTypes.MoveBalanceSuccess:
            return moveBalanceSuccessMutator(state, action);
        case EnvelopesActionTypes.EditEnvelopeSuccess:
            return editEnvelopeSuccessMutator(state, action);
        default: {
            return state;
        }
    }
}

function editEnvelopeSuccessMutator(state: IEnvelopesState, action: EditEnvelopeSuccessAction): IEnvelopesState {
    const payload = action.payload;
    const envelope = state.envelopes.find(e => e.id === payload.envelope.id);

    if (!envelope) return state;
    
    return {
        ...state,
        envelopes: [
            ...state.envelopes.filter(e => e.id !== payload.envelope.id),
            {...envelope, name: payload.envelope.name, envelopeCategory: payload.envelope.envelopeCategory}
        ]
    };
}

function deleteEnvelopeSuccesMutator(state: IEnvelopesState, action: DeleteEnvelopeSuccessAction): IEnvelopesState {
    const payload = action.payload;

    const availableIncomeEnvelope = state.envelopes.find(e => e.name === "Available Income" && e.envelopeCategory.name === "Income")!;

    if (payload.balance > 0) {
        const otherEnvelopes = state.envelopes.filter(e => e.id !== action.payload.envelopeId && e.id !== availableIncomeEnvelope.id);
        return {...state, envelopes: [...otherEnvelopes, {...availableIncomeEnvelope, balance: availableIncomeEnvelope.balance + payload.balance}]}
    } else {
        return {...state, envelopes: [...state.envelopes.filter(e => e.id !== action.payload.envelopeId)]}
    }
}

function moveBalanceSuccessMutator(state: IEnvelopesState, action: MoveBalanceSuccessAction): IEnvelopesState {
    const payload = action.payload;

    const totalAmount = payload.targets.map(e => e.amount).reduce((total, amount) => {
        return total + amount;
    }, 0);

    const fromEnvelope = state.envelopes.find(e => e.id === payload.fromEnvelopeId);

    if (!fromEnvelope) {
        return state;
    }

    const targets: EnvelopeModel[] = []; 
    const targetIds = payload.targets.map(t => t.envelopeId);
    payload.targets.forEach(t => {
        const targetEnvelope = state.envelopes.find(e => e.id === t.envelopeId);

        if (targetEnvelope) {
            targets.push({...targetEnvelope, balance: targetEnvelope.balance + t.amount});
        }
    });

    return {
        ...state,
        envelopes: [
            ...state.envelopes.filter(e => e.id !== fromEnvelope.id && targetIds.indexOf(e.id) === -1),
            {...fromEnvelope, balance: fromEnvelope.balance - totalAmount},
            ...targets]
        }
}

function hideEnvelopeSuccessMutator(state: IEnvelopesState, action: HideEnvelopeSuccessAction): IEnvelopesState {
    const hiddenEnvelopeId = action.payload.envelopeId;
    const hiddenEnvelope = state.envelopes.find(e => e.id === hiddenEnvelopeId);

    if (!hiddenEnvelope) {
        return state;
    } else {
        return {...state, selectedEnvelopeId: undefined, envelopes: [...state.envelopes.filter(e => e.id !== hiddenEnvelopeId), {...hiddenEnvelope, isHidden: true}]}
    }
}

function showEnvelopeSuccessMutator(state: IEnvelopesState, action: ShowEnvelopeSuccessAction): IEnvelopesState {
    const shownEnvelopeId = action.payload.envelopeId;
    const shownEnvelope = state.envelopes.find(e => e.id === shownEnvelopeId);

    if (!shownEnvelope) {
        return state;
    } else {
        return {...state, envelopes: [...state.envelopes.filter(e => e.id !== shownEnvelopeId), {...shownEnvelope, isHidden: false}]}
    }
}

function updateEnvelopeCategoryToggleMutator(state: IEnvelopesState, action: EnvelopeCategoryToggleRequestAction): IEnvelopesState {
    const envelopeCategory = action.payload.envelopeCategory;

    if (!envelopeCategory) {
        return state;
    } else {
        return {...state, envelopeCategories: [...state.envelopeCategories.filter(e => e.id !== envelopeCategory.id), {...envelopeCategory, isToggled: !action.payload.envelopeCategory.isToggled}]}
    }
}

const envelopesState = createSelector(
    coreFeatureSelector,
    state => state.envelopes
);

export const getAllEnvelopes = createSelector(
    envelopesState,
    state => state.envelopes.filter(e => e.name !== "Available Income" && e.envelopeCategory.name !== "Income")
);

export const getVisibleEnvelopes = createSelector(
    getAllEnvelopes,
    envelopes => envelopes.filter(e => !e.isHidden)
);

export const getAvailableIncomeEnvelope = createSelector(
    envelopesState,
    state => state.envelopes.find(e => e.name === "Available Income" && e.envelopeCategory.name === "Income")!
);

export const getEnvelopeCategories = createSelector(
    envelopesState,
    state => state.envelopeCategories.filter(e => e.name !== "Income")
);

export const getSelectedEnvelope = createSelector(
    envelopesState,
    state => state.envelopes.find(e => e.id === state.selectedEnvelopeId)
)