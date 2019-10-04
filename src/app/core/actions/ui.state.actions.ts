import { Action } from "@ngrx/store";

export enum UIStateActionTypes {
    ShowErrorModal = "[UIState] Show Error Modal"
}

export class ShowErrorModalAction implements Action {
    readonly type = UIStateActionTypes.ShowErrorModal;
    constructor(public payload: {message: string, title: string, traceId: string}) { }
}

export type UIStateActions =
    | ShowErrorModalAction;