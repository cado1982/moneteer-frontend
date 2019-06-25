import { BudgetModel } from "../models";
import { BudgetActions, BudgetActionTypes } from "../actions/budget.actions";
import { coreFeatureSelector } from "./feature.selector";
import { createSelector } from "@ngrx/store";

export interface IBudgetsState {
    budgets: BudgetModel[],
    activeBudget: BudgetModel | null,
    showCreateBudget: boolean;
    deletingBudget: BudgetModel | null;
    deleting: boolean;
    creating: boolean;
}

export const initialState: IBudgetsState = {
    budgets: [],
    activeBudget: null,
    showCreateBudget: false,
    deletingBudget: null,
    deleting: false,
    creating: false
}

export function budgetsReducer(state: IBudgetsState = initialState, action: BudgetActions): IBudgetsState {
    switch (action.type) {
        case BudgetActionTypes.LoadSuccess: {
            return {...state, budgets: action.payload.budgets};
        }
        case BudgetActionTypes.ShowDelete: {
            return {...state, deletingBudget: action.payload.budget}
        }
        case BudgetActionTypes.HideDelete: {
            return {...state, deletingBudget: null}
        }
        case BudgetActionTypes.Delete: {
            return {...state, deleting: true}
        }
        case BudgetActionTypes.DeleteSuccess: {
            return {...state, budgets: state.budgets.filter(b => b.id !== action.payload.budget.id), deleting: false, deletingBudget: null};
        }
        case BudgetActionTypes.DeleteFailure: {
            return {...state, deleting: false};
        }

        case BudgetActionTypes.ShowCreate: {
            return {...state, showCreateBudget: true}
        }
        case BudgetActionTypes.HideCreate: {
            return {...state, showCreateBudget: false}
        }
        case BudgetActionTypes.Create: {
            return {...state, creating: true};
        }
        case BudgetActionTypes.CreateSuccess: {
            return {...state, budgets: [...state.budgets, action.payload.budget], creating: false, showCreateBudget: false};
        }
        case BudgetActionTypes.CreateFailure: {
            return {...state, creating: false};
        }
        case BudgetActionTypes.LoadBudgetSuccess: {
            return {...state, activeBudget: action.payload.budget};
        }
        
        default: {
            return state;
        }
    }
}

const budgetsState = createSelector(
    coreFeatureSelector,
    state => state.budget
);

export const getShowCreate = createSelector(
    budgetsState,
    state => state.showCreateBudget
);

export const getIsCreating = createSelector(
    budgetsState,
    state => state.creating
);

export const getDeletingBudget = createSelector(
    budgetsState,
    state => state.deletingBudget
);

export const getShowDelete = createSelector(
    budgetsState,
    state => !!state.deletingBudget
);

export const getIsDeleting = createSelector(
    budgetsState,
    state => state.deleting
);

export const getBudgets = createSelector(
    budgetsState,
    state => state.budgets
);

export const getActiveBudget = createSelector(
    budgetsState,
    state => state.activeBudget
);

