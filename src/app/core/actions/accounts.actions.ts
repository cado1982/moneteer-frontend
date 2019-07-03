import { Action } from "@ngrx/store";
import { AccountModel } from "../../accounts/models";

export enum AccountsActionTypes {
    LoadSingle = "[Accounts] Load Single",
    LoadSingleSuccess = "[Accounts] Load Single Success",
    LoadSingleFailure = "[Accounts] Load Single Failure",
    LoadAll = "[Accounts] Load All",
    LoadAllSuccess = "[Accounts] Load All Success",
    LoadAllFailure = "[Accounts] Load All Failure",
    ShowCreate = "[Accounts] Show Create",
    HideCreate = "[Accounts] Hide Create",
    Create = "[Accounts] Create",
    CreateSuccess = "[Accounts] Create Success",
    CreateFailure = "[Accounts] Create Failure",
}

export class LoadSingleAccountAction implements Action {
    readonly type = AccountsActionTypes.LoadSingle;
    constructor(public payload: {accountId: string}) { }
}
export class LoadSingleAccountSuccessAction implements Action {
    readonly type = AccountsActionTypes.LoadSingleSuccess;
    constructor(public payload: {account: AccountModel}) { }
}
export class LoadSingleAccountFailureAction implements Action {
    readonly type = AccountsActionTypes.LoadSingleFailure;
    constructor(public payload: {error: string}) { }
}


export class LoadAllAccountsAction implements Action {
    readonly type = AccountsActionTypes.LoadAll;
    constructor(public payload: {budgetId: string}) { }
}
export class LoadAllAccountsSuccessAction implements Action {
    readonly type = AccountsActionTypes.LoadAllSuccess;
    constructor(public payload: {accounts: AccountModel[]}) { }
}
export class LoadAllAccountsFailureAction implements Action {
    readonly type = AccountsActionTypes.LoadAllFailure;
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
    LoadSingleAccountAction |
    LoadSingleAccountSuccessAction |
    LoadSingleAccountFailureAction |
    LoadAllAccountsAction |
    LoadAllAccountsSuccessAction |
    LoadAllAccountsFailureAction |
    ShowCreateAccountAction |
    HideCreateAccountAction |
    CreateAccountAction |
    CreateAccountSuccessAction |
    CreateAccountFailureAction;