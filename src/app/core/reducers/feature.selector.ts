import { createFeatureSelector } from "@ngrx/store";
import { IState } from ".";

export const coreFeatureSelector = createFeatureSelector<IState>("core");