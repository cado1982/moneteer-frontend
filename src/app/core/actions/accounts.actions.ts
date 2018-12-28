import { Action } from "@ngrx/store";
import { AccountModel } from "../../accounts/models";

export enum AccountsActionTypes {
    Load = "[Accounts] Load",
    LoadSuccess = "[Accounts] Load Success",
    LoadFailure = "[Accounts] Load Failure",
    ShowCreate = "[Accounts] Show Create",
    HideCreate = "[Accounts] Hide Create",
    Create = "[Accounts] Create",
    CreateSuccess = "[Accounts] Create Success",
    CreateFailure = "[Accounts] Create Failure",
}

export class LoadAccountsAction implements Action {
    readonly type = AccountsActionTypes.Load;
    constructor(public payload: {budgetId: string}) { }
}
export class LoadAccountsSuccessAction implements Action {
    readonly type = AccountsActionTypes.LoadSuccess;
    constructor(public payload: {accounts: AccountModel[]}) { }
}
export class LoadAccountsFailureAction implements Action {
    readonly type = AccountsActionTypes.LoadFailure;
    constructor(public payload: {error: string}) { }
}

export class ShowCreateAccountAction implements Action {
    readonly type = AccountsActionTypes.ShowCreate;
}
export class HideCreateAccountAction implements Action {
    readonly type = AccountsActionTypes.HideCreate;
}
export class CreateAccountAction implements Action {
    readonly type = AccountsActionTypes.Create;
    constructor(public payload: {account: AccountModel}) { }
}
export class CreateAccountSuccessAction implements Action {
    readonly type = AccountsActionTypes.CreateSuccess;
    constructor(public payload: {account: AccountModel}) { }
}
export class CreateAccountFailureAction implements Action {
    readonly type = AccountsActionTypes.CreateFailure;
    constructor(public payload: {error: string}) { }
}

export type AccountsActions =
    LoadAccountsAction |
    LoadAccountsSuccessAction |
    LoadAccountsFailureAction |
    ShowCreateAccountAction |
    HideCreateAccountAction |
    CreateAccountAction |
    CreateAccountSuccessAction |
    CreateAccountFailureAction;