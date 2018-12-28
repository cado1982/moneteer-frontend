import { Action } from "@ngrx/store";
import { EnvelopeModel, EnvelopeCategoryModel } from "../models";

export enum EnvelopesActionTypes {
    Load = "[Envelopes] Load",
    LoadSuccess = "[Envelopes] Load Success",
    LoadFailure = "[Envelopes] Load Failure",
    CreateEnvelopeCategory = "[Envelopes] Create Envelope Category",
    CreateEnvelopeCategorySuccess = "[Envelopes] Create Envelope Category Success",
    CreateEnvelopeCategoryFailure = "[Envelopes] Create Envelope Category Failure",
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

export class CreateEnvelopeCategoryAction implements Action {
    readonly type = EnvelopesActionTypes.CreateEnvelopeCategory;
    constructor(public payload: {budgetId, envelopeCategory: EnvelopeCategoryModel}) { }
}
export class CreateEnvelopeCategorySuccessAction implements Action {
    readonly type = EnvelopesActionTypes.CreateEnvelopeCategorySuccess;
    constructor(public payload: {envelopeCategory: EnvelopeCategoryModel}) { }
}
export class CreateEnvelopeCategoryFailureAction implements Action {
    readonly type = EnvelopesActionTypes.CreateEnvelopeCategoryFailure;
    constructor(public payload: {error: string}) { }
}

export type EnvelopesActions =
    | CreateEnvelopeCategoryAction
    | CreateEnvelopeCategorySuccessAction
    | CreateEnvelopeCategoryFailureAction
    | LoadEnvelopesAction
    | LoadEnvelopesSuccessAction
    | LoadEnvelopesFailureAction;