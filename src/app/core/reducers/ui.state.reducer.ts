import { createSelector } from "@ngrx/store";
import { coreFeatureSelector } from "./feature.selector";
import { UIStateActionTypes, UIStateActions } from "../actions/ui.state.actions";

export interface IUIState {
    errorModal: ErrorModalState;
}

interface ErrorModalState {
    isOpen: boolean,
    message: string,
    title: string
}

const initialState: IUIState = {
    errorModal: {
        isOpen: false,
        message: "",
        title: ""
    }
};

export function uiStateReducer(state: IUIState = initialState, action: UIStateActions): IUIState {
    switch (action.type) {
        case UIStateActionTypes.ShowErrorModal:
            return {...state, errorModal: {
                isOpen: true,
                message: action.payload.message,
                title: action.payload.title
            }};
        default: {
            return state;
        }
    }
}

const uiState = createSelector(
    coreFeatureSelector,
    state => state.uiState
);

export const getErrorModalState = createSelector(
    uiState,
    state => state.errorModal
);