import { Action } from "@ngrx/store";
import { BudgetModel } from "../../core/models";

export enum BudgetActionTypes {
    Load = "[Budgets] Load",
    LoadSuccess = "[Budgets] Load Success",
    LoadFailure = "[Budgets] Load Failure",
    ShowDelete = "[Budgets] Show Delete",
    HideDelete = "[Budgets] Hide Delete",
    Delete = "[Budgets] Delete",
    DeleteSuccess = "[Budgets] Delete Success",
    DeleteFailure = "[Budgets] Delete Failure",
    ShowCreate = "[Budgets] Show Create",
    HideCreate = "[Budgets] Hide Create",
    Create = "[Budgets] Create",
    CreateSuccess = "[Budgets] Create Success",
    CreateFailure = "[Budgets] Create Failure",
    LoadBudget = "[Budget] Load",
    LoadBudgetSuccess = "[Budget] Load Success",
    LoadBudgetFailure = "[Budget] Load Failure",
}

export class LoadBudgetsAction implements Action {
    readonly type = BudgetActionTypes.Load;
    public payload: any;
}
export class LoadBudgetsSuccessAction implements Action {
    readonly type = BudgetActionTypes.LoadSuccess;
    constructor(public payload: {budgets: BudgetModel[]}) { }
}
export class LoadBudgetsFailureAction implements Action {
    readonly type = BudgetActionTypes.LoadFailure;
    constructor(public payload: {error: string}) { }
}


export class ShowDeleteBudgetAction implements Action {
    readonly type = BudgetActionTypes.ShowDelete;
    constructor(public payload: {budget: BudgetModel}) { }
}
export class HideDeleteBudgetAction implements Action {
    readonly type = BudgetActionTypes.HideDelete;
}
export class DeleteBudgetAction implements Action {
    readonly type = BudgetActionTypes.Delete;
    constructor(public payload: {budget: BudgetModel}) { }
}
export class DeleteBudgetSuccessAction implements Action {
    readonly type = BudgetActionTypes.DeleteSuccess;
    constructor(public payload: {budget: BudgetModel}) { }
}
export class DeleteBudgetFailureAction implements Action {
    readonly type = BudgetActionTypes.DeleteFailure;
    constructor(public payload: {error: string}) { }
}

export class ShowCreateBudgetAction implements Action {
    readonly type = BudgetActionTypes.ShowCreate;
}
export class HideCreateBudgetAction implements Action {
    readonly type = BudgetActionTypes.HideCreate;
}
export class CreateBudgetAction implements Action {
    readonly type = BudgetActionTypes.Create;
    constructor(public payload: {budget: BudgetModel}) { }
}
export class CreateBudgetSuccessAction implements Action {
    readonly type = BudgetActionTypes.CreateSuccess;
    constructor(public payload: {budget: BudgetModel}) { }
}
export class CreateBudgetFailureAction implements Action {
    readonly type = BudgetActionTypes.CreateFailure;
    constructor(public payload: {error: string}) { }
}

export class LoadBudgetAction implements Action {
    readonly type = BudgetActionTypes.LoadBudget;
    constructor(public payload: {budgetId: string}) { }
}
export class LoadBudgetSuccessAction implements Action {
    readonly type = BudgetActionTypes.LoadBudgetSuccess;
    constructor(public payload: {budget: BudgetModel}) { }
}
export class LoadBudgetFailureAction implements Action {
    readonly type = BudgetActionTypes.LoadBudgetFailure;
    constructor(public payload: {error: string}) { }
}

export type BudgetActions =
    LoadBudgetsAction |
    LoadBudgetsSuccessAction |
    LoadBudgetsFailureAction |
    ShowDeleteBudgetAction |
    HideDeleteBudgetAction |
    DeleteBudgetAction |
    DeleteBudgetSuccessAction |
    DeleteBudgetFailureAction |
    ShowCreateBudgetAction |
    HideCreateBudgetAction |
    CreateBudgetAction |
    CreateBudgetSuccessAction |
    CreateBudgetFailureAction |
    LoadBudgetAction |
    LoadBudgetSuccessAction |
    LoadBudgetFailureAction; 