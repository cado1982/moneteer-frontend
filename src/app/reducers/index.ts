import { ActionReducerMap, ActionReducer, MetaReducer, createFeatureSelector } from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";
import { environment } from "../../environments/environment";
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from "../shared/utils";

export interface IState {
    router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<IState> = {
    router: fromRouter.routerReducer
};

export const metaReducers: MetaReducer<IState>[] = !environment.production
  ? [storeFreeze]
  : [];