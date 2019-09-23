import { TransactionsActions, TransactionsActionTypes } from "../actions/transactions.actions";
import { createSelector } from "@ngrx/store";
import { TransactionModel } from "../../accounts/models";
import { coreFeatureSelector } from "./feature.selector";
import { PayeeModel } from "../models";
import { RecentTransactionByEnvelope } from "../models/recent.transaction.by.envelope.model";

export interface ITransactionsState {
    loading: boolean;
    creating: boolean;
    deleting: boolean;
    confirmingDelete: boolean;
    createTransactionOpen: boolean;
    transactions: TransactionModel[];
    payees: PayeeModel[];
    selectedTransactionIds: string[];
    editingTransactionId: string | null;
    recentTransactionsByEnvelopes: RecentTransactionByEnvelope[];
}

export const initialState: ITransactionsState = {
    loading: false,
    creating: false,
    deleting: false,
    confirmingDelete: false,
    createTransactionOpen: false,
    transactions: [],
    payees: [],
    selectedTransactionIds: [],
    editingTransactionId: null,
    recentTransactionsByEnvelopes: []
};

export function transactionsReducer(state: ITransactionsState = initialState, action: TransactionsActions): ITransactionsState {
    switch (action.type) {
        // Load
        case TransactionsActionTypes.LoadTransactions: {
            return{...state, loading: true};
        }
        case TransactionsActionTypes.LoadTransactionsSuccess: {
            return {...state, transactions: action.payload.transactions, loading: false};
        }
        case TransactionsActionTypes.LoadTransactionsFailure: {
            return {...state, loading: false};
        }

        // Load for account
        case TransactionsActionTypes.LoadTransactionsForAccount: {
            return{...state, loading: true};
        }
        case TransactionsActionTypes.LoadTransactionsForAccountSuccess: {
            if (action.payload.transactionsForAccount.length > 0) {
                return {...state, transactions: [...state.transactions.filter(t => t.account.id !== action.payload.transactionsForAccount[0].account.id), ...action.payload.transactionsForAccount], loading: false};
            } else {
                return state;
            }
        }
        case TransactionsActionTypes.LoadTransactionsForAccountFailure: {
            return {...state, loading: false};
        }

        // Load recent by envelope
        case TransactionsActionTypes.LoadRecentTransactionsByEnvelopeSuccess: {
            if (action.payload.recentTransactions.length > 0) {
                return {...state, recentTransactionsByEnvelopes: action.payload.recentTransactions};
            } else {
                return state;
            }
        }

        // Payees
        case TransactionsActionTypes.LoadPayeesSuccess: {
            return {...state, payees: action.payload.payees};
        }

        case TransactionsActionTypes.ShowCreateTransaction: {
            return {
                ...state,
                createTransactionOpen: true
            }
        }
        case TransactionsActionTypes.HideCreateTransaction: {
            return {...state, createTransactionOpen: false}
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
                createTransactionOpen: false
            };
        }
        case TransactionsActionTypes.CreateTransactionFailure: {
            return {...state, creating: false};
        }

        case TransactionsActionTypes.UpdateTransaction: {
            return {...state, creating: true};
        }
        case TransactionsActionTypes.UpdateTransactionSuccess: {
            return {...state, transactions: [...state.transactions.filter(t => t.id !== action.payload.transaction.id), action.payload.transaction], creating: false, createTransactionOpen: false};
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
            const matchingTransaction = state.transactions.find(t => t.id === action.payload.transaction.id);
            if (!matchingTransaction) return state;
            return {...state, transactions: [...state.transactions.filter(t => t.id !== action.payload.transaction.id), {...matchingTransaction, isCleared: action.payload.isCleared} ]}
        }
        case TransactionsActionTypes.SetTransactionClearedFailure: {
            const matchingTransaction = state.transactions.find(t => t.id === action.payload.transaction.id);
            if (!matchingTransaction) return state;
            return {...state, transactions: [...state.transactions.filter(t => t.id !== action.payload.transaction.id), {...matchingTransaction, isCleared: action.payload.originalState} ]}
        }

        case TransactionsActionTypes.SelectTransaction: {
            // If a transaction is already selected, we want to edit it.
            if (state.selectedTransactionIds.indexOf(action.payload.transactionId) > -1) {
                return {...state, editingTransactionId: action.payload.transactionId};
            } else {
                return {...state, selectedTransactionIds: [...state.selectedTransactionIds, action.payload.transactionId]}
            }
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

        case TransactionsActionTypes.BeginEditTransaction: {
            return {...state, editingTransactionId: action.payload.transactionId, selectedTransactionIds: []}
        }
        case TransactionsActionTypes.EndEditTransaction: {
            return {...state, editingTransactionId: null}
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

export const getRecentTransactionsByEnvelope = createSelector(
    transactionsState,
    state => state.recentTransactionsByEnvelopes
);

export const getIsCreateTransactionOpen = createSelector(
    transactionsState,
    state => state.createTransactionOpen
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

export const getIsTransactionSelected = createSelector(
    transactionsState,
    (state: ITransactionsState, props: {transactionId: string}) => state.selectedTransactionIds.indexOf(props.transactionId) > -1
);

export const getEditingTransaction = createSelector(
    transactionsState,
    state => state.editingTransactionId
);

export const getIsEditingTransaction = createSelector(
    getEditingTransaction,
    (state: string | null, props: {transactionId: string}) => state !== null && state === props.transactionId
)