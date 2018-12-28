import { AccountsActions, AccountsActionTypes } from "../actions/accounts.actions";
import { AccountModel } from "../../accounts/models";
import { EntityAdapter, createEntityAdapter, EntityState } from "@ngrx/entity";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { coreFeatureSelector } from "./feature.selector";

export interface IAccountsState {
    loading: boolean;
    creating: boolean;
    deleting: boolean;
    showCreate: boolean;
    accounts: AccountModel[];
    activeAccountId: string
}

const initialState: IAccountsState = {
    loading: false,
    creating: false,
    deleting: false,
    showCreate: false,
    accounts: [],
    activeAccountId: ""
};

export function accountsReducer(state: IAccountsState = initialState, action: AccountsActions): IAccountsState {
    switch (action.type) {
        case AccountsActionTypes.Load: {
            return {...state, loading: true};
        }
        case AccountsActionTypes.LoadSuccess: {
            return {...state, accounts: action.payload.accounts, loading: false};
        }
        case AccountsActionTypes.LoadFailure: {
            return {...state, loading: false};
        }
        
        case AccountsActionTypes.ShowCreate: {
            return {...state, showCreate: true};
        }
        case AccountsActionTypes.HideCreate: {
            return {...state, showCreate: false};
        }
        case AccountsActionTypes.Create: {
            return {...state, creating: true};
        }
        case AccountsActionTypes.CreateSuccess: {
            return {...state, accounts: [...state.accounts, action.payload.account], creating: false, showCreate: false };
        }
        case AccountsActionTypes.CreateFailure: {
            return {...state, creating: false};
        }
        
        default: {
            return state;
        }
    }
}


const accountsState = createSelector(
    coreFeatureSelector,
    state => state.accounts
);

export const getShowCreate = createSelector(
    accountsState,
    state => state.showCreate
);

export const getIsCreating = createSelector(
    accountsState,
    state => state.creating
);

export const getAccounts = createSelector(
    accountsState,
    state => state.accounts
);

export const getOffBudgetAccounts =  createSelector(
    getAccounts,
    state => state.filter(s => !s.isBudget)
);

export const getBudgetAccounts =  createSelector(
    getAccounts,
    state => state.filter(s => s.isBudget)
);