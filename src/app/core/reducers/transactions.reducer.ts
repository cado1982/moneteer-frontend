import { TransactionsActions, TransactionsActionTypes } from "../actions/transactions.actions";
import { createSelector } from "@ngrx/store";
import { TransactionModel } from "../../accounts/models";
import { coreFeatureSelector } from "./feature.selector";
import { PayeeModel } from "../models";

export enum CreateTransactionMode {
    Inflow = "INFLOW",
    Outflow = "OUTFLOW"
}

export interface ITransactionsState {
    loading: boolean;
    creating: boolean;
    deleting: boolean;
    confirmingDelete: boolean;
    createTransactionInflowOpen: boolean;
    createTransactionOutflowOpen: boolean;
    transactions: TransactionModel[];
    payees: PayeeModel[];
    selectedTransactionIds: string[];
}

export const initialState: ITransactionsState = {
    loading: false,
    creating: false,
    deleting: false,
    confirmingDelete: false,
    createTransactionInflowOpen: false,
    createTransactionOutflowOpen: false,
    transactions: [],
    payees: [],
    selectedTransactionIds: []
};

export function transactionsReducer(state: ITransactionsState = initialState, action: TransactionsActions): ITransactionsState {
    switch (action.type) {
        case TransactionsActionTypes.LoadTransactions: {
            return{...state, loading: true};
        }
        case TransactionsActionTypes.LoadTransactionsSuccess: {
            return {...state, transactions: action.payload.transactions, loading: false};
        }
        case TransactionsActionTypes.LoadTransactionsFailure: {
            return {...state, loading: false};
        }

        // Payees
        case TransactionsActionTypes.LoadPayeesSuccess: {
            return {...state, payees: action.payload.payees};
        }

        case TransactionsActionTypes.ShowCreateTransaction: {
            return {
                ...state,
                createTransactionInflowOpen: action.payload.mode === CreateTransactionMode.Inflow,
                createTransactionOutflowOpen: action.payload.mode === CreateTransactionMode.Outflow
            }
        }
        case TransactionsActionTypes.HideCreateTransaction: {
            return {...state, createTransactionInflowOpen: false, createTransactionOutflowOpen: false}
        }
        case TransactionsActionTypes.CreateTransaction: {
            return {...state, creating: true};
        }
        case TransactionsActionTypes.CreateTransactionSuccess: {
            let payees: PayeeModel[];
            // If there's a payee on the new transaction and we don't have it yet, save it.
            if (!!action.payload.transaction.payee && !state.payees.find(p => p.id === action.payload.transaction.payee!.id)) {
                payees = [...state.payees, action.payload.transaction.payee];
            } else {
                payees = state.payees;                
            }
            
            return {
                ...state,
                transactions: [
                    ...state.transactions,
                    action.payload.transaction
                ],
                payees: payees,
                creating: false,
                createTransactionInflowOpen: false,
                createTransactionOutflowOpen: false
            };
        }
        case TransactionsActionTypes.CreateTransactionFailure: {
            return {...state, creating: false};
        }

        case TransactionsActionTypes.UpdateTransaction: {
            return {...state, creating: true};
        }
        case TransactionsActionTypes.UpdateTransactionSuccess: {
            return {...state, transactions: [...state.transactions.filter(t => t.id !== action.payload.transaction.id), action.payload.transaction], creating: false, createTransactionInflowOpen: false, createTransactionOutflowOpen: false};
        }
        case TransactionsActionTypes.UpdateTransactionFailure: {
            return {...state, creating: false};
        }

        case TransactionsActionTypes.DeleteTransactions: {
            return {...state, deleting: true};
        }
        case TransactionsActionTypes.DeleteTransactionsSuccess: {
            return {...state, transactions: state.transactions.filter(t => !action.payload.transactions.some(ts => ts.id === t.id)), deleting: false, confirmingDelete: false};
        }
        case TransactionsActionTypes.DeleteTransactionsFailure: {
            return {...state, deleting: false};
        }

        case TransactionsActionTypes.ConfirmTransactionsDelete: {
            return {...state, confirmingDelete: true}
        }
        case TransactionsActionTypes.CancelTransactionsDelete: {
            return {...state, confirmingDelete: false}
        }

        case TransactionsActionTypes.SetTransactionClearedSuccess: {
            const matchingTransaction = state.transactions.find(t => t.id === action.payload.transactionId);
            if (!matchingTransaction) return state;
            return {...state, transactions: [...state.transactions.filter(t => t.id !== action.payload.transactionId), {...matchingTransaction, isCleared: action.payload.isCleared} ]}
        }
        case TransactionsActionTypes.SetTransactionClearedFailure: {
            const matchingTransaction = state.transactions.find(t => t.id === action.payload.transactionId);
            if (!matchingTransaction) return state;
            return {...state, transactions: [...state.transactions.filter(t => t.id !== action.payload.transactionId), {...matchingTransaction, isCleared: action.payload.originalState} ]}
        }

        case TransactionsActionTypes.SelectTransaction: {
            if (state.selectedTransactionIds.indexOf(action.payload.transactionId) > -1) return state;
            return {...state, selectedTransactionIds: [...state.selectedTransactionIds, action.payload.transactionId]}
        }
        case TransactionsActionTypes.DeselectTransaction: {
            if (state.selectedTransactionIds.indexOf(action.payload.transactionId) === -1) return state;
            return {...state, selectedTransactionIds: state.selectedTransactionIds.filter(t => t !== action.payload.transactionId)}
        }
        case TransactionsActionTypes.SelectAllTransactions: {
            return {...state, selectedTransactionIds: state.transactions.map(t => t.id)}
        }
        case TransactionsActionTypes.DeselectAllTransactions: {
            return {...state, selectedTransactionIds: []}
        }

        default: {
            return state;
        }

    }
}

const transactionsState = createSelector(
    coreFeatureSelector,
    state => state.transactions
);

export const getTransactions = createSelector(
    transactionsState,
    state => state.transactions.slice().sort((a, b) => {
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        if (a.date === b.date && a.id < b.id) return -1;
        if (a.date === b.date && a.id > b.id) return 1;
        return 0;
    })
);

export const getIsCreateInflowTransactionOpen = createSelector(
    transactionsState,
    state => state.createTransactionInflowOpen
);

export const getIsCreateOutflowTransactionOpen = createSelector(
    transactionsState,
    state => state.createTransactionOutflowOpen
);

export const getIsDeleting = createSelector(
    transactionsState,
    state => state.deleting
);

export const getIsConfirmingDelete = createSelector(
    transactionsState,
    state => state.confirmingDelete
);

export const getIsCreating = createSelector(
    transactionsState,
    state => state.creating
);

export const getSelectedTransactions = createSelector(
    transactionsState,
    state => state.transactions.filter(t => state.selectedTransactionIds.indexOf(t.id) > -1)
);

export const getPayees = createSelector(
    transactionsState,
    state => state.payees
);