import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from "../shared/utils";

export interface IState {
    router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<IState> = {
    router: fromRouter.routerReducer
};