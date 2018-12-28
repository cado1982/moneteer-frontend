import { ActionReducerMap } from "@ngrx/store";
import { budgetsReducer, IBudgetsState } from "./budget.reducer";
import { accountsReducer, IAccountsState } from "./accounts.reducer";
import { transactionsReducer, ITransactionsState } from "./transactions.reducer";
import { envelopesReducer, IEnvelopesState } from "./envelopes.reducer";

export interface IState {
    budget: IBudgetsState
    accounts: IAccountsState,
    transactions: ITransactionsState,
    envelopes: IEnvelopesState
}

export const reducers: ActionReducerMap<IState> = {
    budget: budgetsReducer,
    accounts: accountsReducer,
    transactions: transactionsReducer,
    envelopes: envelopesReducer
}