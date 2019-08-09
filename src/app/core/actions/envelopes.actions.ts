import { Action } from "@ngrx/store";
import { EnvelopeModel, EnvelopeCategoryModel } from "../models";
import { AssignIncomeRequest } from "../models/assign.income.request";

export enum EnvelopesActionTypes {
    Load = "[Envelopes] Load",
    LoadSuccess = "[Envelopes] Load Success",
    LoadFailure = "[Envelopes] Load Failure",
    LoadCategories = "[Envelopes] Load Categories",
    LoadCategoriesSuccess = "[Envelopes] Load Categories Success",
    LoadCategoriesFailure = "[Envelopes] Load Categories Failure",
    CreateEnvelopeCategory = "[Envelopes] Create Envelope Category",
    CreateEnvelopeCategorySuccess = "[Envelopes] Create Envelope Category Success",
    CreateEnvelopeCategoryFailure = "[Envelopes] Create Envelope Category Failure",
    CreateEnvelope = "[Envelopes] Create Envelope",
    CreateEnvelopeSuccess = "[Envelopes] Create Envelope Success",
    CreateEnvelopeFailure = "[Envelopes] Create Envelope Failure",
    AssignIncomeRequest = "[Envelopes] Assign Income Request",
    AssignIncomeSuccess = "[Envelopes] Assign Income Success",
    AssignIncomeFailure = "[Envelopes] Assign Income Failure",
}


export class LoadEnvelopesAction implements Action {
    readonly type = EnvelopesActionTypes.Load;
    constructor(public payload: {budgetId: string}) { }
}
export class LoadEnvelopesSuccessAction implements Action {
    readonly type = EnvelopesActionTypes.LoadSuccess;
    constructor(public payload: {envelopes: EnvelopeModel[], available: number}) { }
}
export class LoadEnvelopesFailureAction implements Action {
    readonly type = EnvelopesActionTypes.LoadFailure;
    constructor(public payload: {error: string}) { }
}


export class LoadEnvelopeCategoriesAction implements Action {
    readonly type = EnvelopesActionTypes.LoadCategories;
    constructor(public payload: {budgetId: string}) { }
}
export class LoadEnvelopeCategoriesSuccessAction implements Action {
    readonly type = EnvelopesActionTypes.LoadCategoriesSuccess;
    constructor(public payload: {envelopeCategories: EnvelopeCategoryModel[]}) { }
}
export class LoadEnvelopeCategoriesFailureAction implements Action {
    readonly type = EnvelopesActionTypes.LoadCategoriesFailure;
    constructor(public payload: {error: string}) { }
}

export class CreateEnvelopeCategoryAction implements Action {
    readonly type = EnvelopesActionTypes.CreateEnvelopeCategory;
    constructor(public payload: {budgetId: string, envelopeCategory: EnvelopeCategoryModel}) { }
}
export class CreateEnvelopeCategorySuccessAction implements Action {
    readonly type = EnvelopesActionTypes.CreateEnvelopeCategorySuccess;
    constructor(public payload: {envelopeCategory: EnvelopeCategoryModel}) { }
}
export class CreateEnvelopeCategoryFailureAction implements Action {
    readonly type = EnvelopesActionTypes.CreateEnvelopeCategoryFailure;
    constructor(public payload: {error: string}) { }
}

export class CreateEnvelopeAction implements Action {
    readonly type = EnvelopesActionTypes.CreateEnvelope;
    constructor(public payload: {budgetId: string, envelope: EnvelopeModel}) { }
}
export class CreateEnvelopeSuccessAction implements Action {
    readonly type = EnvelopesActionTypes.CreateEnvelopeSuccess;
    constructor(public payload: {envelope: EnvelopeModel}) { }
}
export class CreateEnvelopeFailureAction implements Action {
    readonly type = EnvelopesActionTypes.CreateEnvelopeFailure;
    constructor(public payload: {error: string}) { }
}

export class AssignIncomeRequestAction implements Action {
    readonly type = EnvelopesActionTypes.AssignIncomeRequest;
    constructor(public payload: {budgetId: string, request: AssignIncomeRequest}) { }
}
export class AssignIncomeSuccessAction implements Action {
    readonly type = EnvelopesActionTypes.AssignIncomeSuccess;
}
export class AssignIncomeFailureAction implements Action {
    readonly type = EnvelopesActionTypes.AssignIncomeFailure;
    constructor(public payload: {error: string}) { }
}

export type EnvelopesActions =
    | CreateEnvelopeCategoryAction
    | CreateEnvelopeCategorySuccessAction
    | CreateEnvelopeCategoryFailureAction
    | CreateEnvelopeAction
    | CreateEnvelopeSuccessAction
    | CreateEnvelopeFailureAction
    | LoadEnvelopesAction
    | LoadEnvelopesSuccessAction
    | LoadEnvelopesFailureAction
    | LoadEnvelopeCategoriesAction
    | LoadEnvelopeCategoriesSuccessAction
    | LoadEnvelopeCategoriesFailureAction
    | AssignIncomeRequestAction
    | AssignIncomeSuccessAction
    | AssignIncomeFailureAction;