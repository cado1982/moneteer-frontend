import { Action } from "@ngrx/store";
import { EnvelopeModel, EnvelopeCategoryModel, EnvelopeBalanceTarget } from "../models";

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
    DeleteEnvelope = "[Envelopes] Delete Envelope",
    DeleteEnvelopeSuccess = "[Envelopes] Delete Envelope Success",
    DeleteEnvelopeFailure = "[Envelopes] Delete Envelope Failure",
    MoveBalanceRequest = "[Envelopes] Move Balance Request",
    MoveBalanceSuccess = "[Envelopes] Move Balance Success",
    MoveBalanceFailure = "[Envelopes] Move Balance Failure",
    HideEnvelopeRequest = "[Envelopes] Hide",
    HideEnvelopeSuccess = "[Envelopes] Hide Success",
    HideEnvelopeFailure = "[Envelopes] Hide Failure",
    ShowEnvelopeRequest = "[Envelopes] Show",
    ShowEnvelopeSuccess = "[Envelopes] Show Success",
    ShowEnvelopeFailure = "[Envelopes] Show Failure",
    SelectEnvelope = "[Envelopes] Select"
}

export class LoadEnvelopesAction implements Action {
    readonly type = EnvelopesActionTypes.Load;
    constructor(public payload: {budgetId: string}) { }
}
export class LoadEnvelopesSuccessAction implements Action {
    readonly type = EnvelopesActionTypes.LoadSuccess;
    constructor(public payload: {envelopes: EnvelopeModel[]}) { }
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

export class DeleteEnvelopeAction implements Action {
    readonly type = EnvelopesActionTypes.DeleteEnvelope;
    constructor(public payload: {envelopeId: string}) { }
}
export class DeleteEnvelopeSuccessAction implements Action {
    readonly type = EnvelopesActionTypes.DeleteEnvelopeSuccess;
    constructor(public payload: {envelopeId: string}) { }
}
export class DeleteEnvelopeFailureAction implements Action {
    readonly type = EnvelopesActionTypes.DeleteEnvelopeFailure;
    constructor(public payload: {error: string}) { }
}

export class MoveBalanceRequestAction implements Action {
    readonly type = EnvelopesActionTypes.MoveBalanceRequest;
    constructor(public payload: {fromEnvelopeId: string, targets: EnvelopeBalanceTarget[]}) { }
}
export class MoveBalanceSuccessAction implements Action {
    readonly type = EnvelopesActionTypes.MoveBalanceSuccess;
    constructor(public payload: {fromEnvelopeId: string, targets: EnvelopeBalanceTarget[]}) { }
}
export class MoveBalanceFailureAction implements Action {
    readonly type = EnvelopesActionTypes.MoveBalanceFailure;
    constructor(public payload: {error: string}) { }
}

export class HideEnvelopeRequestAction implements Action {
    readonly type = EnvelopesActionTypes.HideEnvelopeRequest;
    constructor(public payload: {envelopeId: string}) { }
}
export class HideEnvelopeSuccessAction implements Action {
    readonly type = EnvelopesActionTypes.HideEnvelopeSuccess;
    constructor(public payload: {envelopeId: string}) { }
}
export class HideEnvelopeFailureAction implements Action {
    readonly type = EnvelopesActionTypes.HideEnvelopeFailure;
    constructor(public payload: {error: string}) { }
}

export class ShowEnvelopeRequestAction implements Action {
    readonly type = EnvelopesActionTypes.ShowEnvelopeRequest;
    constructor(public payload: {envelopeId: string}) { }
}
export class ShowEnvelopeSuccessAction implements Action {
    readonly type = EnvelopesActionTypes.ShowEnvelopeSuccess;
    constructor(public payload: {envelopeId: string}) { }
}
export class ShowEnvelopeFailureAction implements Action {
    readonly type = EnvelopesActionTypes.ShowEnvelopeFailure;
    constructor(public payload: {error: string}) { }
}

export class SelectEnvelopeAction implements Action {
    readonly type = EnvelopesActionTypes.SelectEnvelope;
    constructor(public payload: {envelopeId: string}) { }
}

export type EnvelopesActions =
    | CreateEnvelopeCategoryAction
    | CreateEnvelopeCategorySuccessAction
    | CreateEnvelopeCategoryFailureAction
    | CreateEnvelopeAction
    | CreateEnvelopeSuccessAction
    | CreateEnvelopeFailureAction
    | DeleteEnvelopeAction
    | DeleteEnvelopeSuccessAction
    | DeleteEnvelopeFailureAction
    | LoadEnvelopesAction
    | LoadEnvelopesSuccessAction
    | LoadEnvelopesFailureAction
    | LoadEnvelopeCategoriesAction
    | LoadEnvelopeCategoriesSuccessAction
    | LoadEnvelopeCategoriesFailureAction
    | MoveBalanceRequestAction
    | MoveBalanceSuccessAction
    | MoveBalanceFailureAction
    | HideEnvelopeRequestAction
    | HideEnvelopeSuccessAction
    | HideEnvelopeFailureAction
    | ShowEnvelopeRequestAction
    | ShowEnvelopeSuccessAction
    | ShowEnvelopeFailureAction
    | SelectEnvelopeAction;