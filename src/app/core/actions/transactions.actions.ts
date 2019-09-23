import { Action } from "@ngrx/store";
import { TransactionModel } from "../../accounts/models";
import { PayeeModel } from "../models";
import { RecentTransactionByEnvelope } from "../models/recent.transaction.by.envelope.model";

export enum TransactionsActionTypes {
    LoadTransactions = "[Transactions] Load",
    LoadTransactionsSuccess = "[Transactions] Load Success",
    LoadTransactionsFailure = "[Transactions] Load Failure",

    LoadTransactionsForAccount = "[Transactions] Load For Account",
    LoadTransactionsForAccountSuccess = "[Transactions] Load For Account Success",
    LoadTransactionsForAccountFailure = "[Transactions] Load For Account Failure",

    LoadRecentTransactionsByEnvelope = "[Transactions] Load Recent By Envelope",
    LoadRecentTransactionsByEnvelopeSuccess = "[Transactions] Load Recent By Envelope Success",
    LoadRecentTransactionsByEnvelopeFailure = "[Transactions] Load Recent By Envelope Failure",

    LoadPayees = "[Payees] Load",
    LoadPayeesSuccess = "[Payees] Load Success",
    LoadPayeesFailure = "[Payees] Load Failure",

    ShowCreateTransaction = "[Transactions] Show Create",
    HideCreateTransaction = "[Transactions] Hide Create",
    CreateTransaction = "[Transactions] Create",
    CreateTransactionSuccess = "[Transactions] Create Success",
    CreateTransactionFailure = "[Transactions] Create Failure",

    UpdateTransaction = "[Transactions] Update",
    UpdateTransactionSuccess = "[Transactions] Update Success",
    UpdateTransactionFailure = "[Transactions] Update Failure",

    DeleteTransactions = "[Transactions] Delete",
    DeleteTransactionsSuccess = "[Transactions] Delete Success",
    DeleteTransactionsFailure = "[Transactions] Delete Failure",

    SetTransactionCleared = "[Transactions] Set Cleared",
    SetTransactionClearedSuccess = "[Transactions] Set Cleared Success",
    SetTransactionClearedFailure = "[Transactions] Set Cleared Failure",

    ConfirmTransactionsDelete = "[Transactions] Confirm Delete",
    CancelTransactionsDelete = "[Transactions] Cancel Delete",

    SelectTransaction = "[Transactions] Select",
    DeselectTransaction = "[Transactions] Deselect",
    SelectAllTransactions = "[Transactions] Select All",
    DeselectAllTransactions = "[Transactions] Deselect All",

    BeginEditTransaction = "[Transactions] Begin Edit",
    EndEditTransaction = "[Transactions] End Edit" 
}
// Load
export class LoadTransactionsAction implements Action {
    readonly type = TransactionsActionTypes.LoadTransactions;
    constructor(public payload: {budgetId: string}) { }
}
export class LoadTransactionsSuccessAction implements Action {
    readonly type = TransactionsActionTypes.LoadTransactionsSuccess;
    constructor(public payload: {transactions: TransactionModel[]}) { }
}
export class LoadTransactionsFailureAction implements Action {
    readonly type = TransactionsActionTypes.LoadTransactionsFailure;
    constructor(public payload: {error: string}) { }
}

// Load For Account
export class LoadTransactionsForAccountAction implements Action {
    readonly type = TransactionsActionTypes.LoadTransactionsForAccount;
    constructor(public payload: {accountId: string}) { }
}
export class LoadTransactionsForAccountSuccessAction implements Action {
    readonly type = TransactionsActionTypes.LoadTransactionsForAccountSuccess;
    constructor(public payload: {transactionsForAccount: TransactionModel[]}) { }
}
export class LoadTransactionsForAccountFailureAction implements Action {
    readonly type = TransactionsActionTypes.LoadTransactionsForAccountFailure;
    constructor(public payload: {error: string}) { }
}

// Load Recent By Envelope
export class LoadRecentTransactionsByEnvelopeAction implements Action {
    readonly type = TransactionsActionTypes.LoadRecentTransactionsByEnvelope;
    constructor(public payload: {budgetId: string}) { }
}
export class LoadRecentTransactionsByEnvelopeSuccessAction implements Action {
    readonly type = TransactionsActionTypes.LoadRecentTransactionsByEnvelopeSuccess;
    constructor(public payload: {recentTransactions: RecentTransactionByEnvelope[]}) { }
}
export class LoadRecentTransactionsByEnvelopeFailureAction implements Action {
    readonly type = TransactionsActionTypes.LoadRecentTransactionsByEnvelopeFailure;
    constructor(public payload: {error: string}) { }
}

// Payees
export class LoadPayeesAction implements Action {
    readonly type = TransactionsActionTypes.LoadPayees;
    constructor(public payload: {budgetId: string}) { }
}
export class LoadPayeesSuccessAction implements Action {
    readonly type = TransactionsActionTypes.LoadPayeesSuccess;
    constructor(public payload: {payees: PayeeModel[]}) { }
}
export class LoadPayeesFailureAction implements Action {
    readonly type = TransactionsActionTypes.LoadPayeesFailure;
    constructor(public payload: {error: string}) { }
}

// Create
export class ShowCreateTransactionAction implements Action {
    readonly type = TransactionsActionTypes.ShowCreateTransaction;
}
export class HideCreateTransactionAction implements Action {
    readonly type = TransactionsActionTypes.HideCreateTransaction;
}
export class CreateTransactionAction implements Action {
    readonly type = TransactionsActionTypes.CreateTransaction;
    constructor(public payload: {transaction: TransactionModel}) { }
}
export class CreateTransactionSuccessAction implements Action {
    readonly type = TransactionsActionTypes.CreateTransactionSuccess;
    constructor(public payload: {transaction: TransactionModel}) { }
}
export class CreateTransactionFailureAction implements Action {
    readonly type = TransactionsActionTypes.CreateTransactionFailure;
    constructor(public payload: {error: string, transaction: TransactionModel}) { }
}

// Edit
export class UpdateTransactionAction implements Action {
    readonly type = TransactionsActionTypes.UpdateTransaction;
    constructor(public payload: {transaction: TransactionModel}) { }
}
export class UpdateTransactionSuccessAction implements Action {
    readonly type = TransactionsActionTypes.UpdateTransactionSuccess;
    constructor(public payload: {transaction: TransactionModel}) { }
}
export class UpdateTransactionFailureAction implements Action {
    readonly type = TransactionsActionTypes.UpdateTransactionFailure;
    constructor(public payload: {error: string, transaction: TransactionModel}) { }
}

// Delete
export class DeleteTransactionsAction implements Action {
    readonly type = TransactionsActionTypes.DeleteTransactions;
    constructor(public payload: {transactions: TransactionModel[]}) { }
}
export class DeleteTransactionsSuccessAction implements Action {
    readonly type = TransactionsActionTypes.DeleteTransactionsSuccess;
    constructor(public payload: {transactions: TransactionModel[]}) { }
}
export class DeleteTransactionsFailureAction implements Action {
    readonly type = TransactionsActionTypes.DeleteTransactionsFailure;
    constructor(public payload: {error: string, transactions: TransactionModel[]}) { }
}
export class ConfirmDeleteTransactions implements Action {
    readonly type = TransactionsActionTypes.ConfirmTransactionsDelete;
}
export class CancelDeleteTransactions implements Action {
    readonly type = TransactionsActionTypes.CancelTransactionsDelete;
}

// Clear
export class SetTransactionClearedAction implements Action {
    readonly type = TransactionsActionTypes.SetTransactionCleared;
    constructor(public payload: {transaction: TransactionModel, isCleared: boolean}) { }
}
export class SetTransactionClearedSuccessAction implements Action {
    readonly type = TransactionsActionTypes.SetTransactionClearedSuccess;
    constructor(public payload: {transaction: TransactionModel, isCleared: boolean}) { }
}
export class SetTransactionClearedFailureAction implements Action {
    readonly type = TransactionsActionTypes.SetTransactionClearedFailure;
    constructor(public payload: {error: any, transaction: TransactionModel, originalState: boolean}) { }
}

// Selection
export class SelectTransactionAction implements Action {
    readonly type = TransactionsActionTypes.SelectTransaction;
    constructor(public payload: {transactionId: string}) { }
}
export class DeselectTransactionAction implements Action {
    readonly type = TransactionsActionTypes.DeselectTransaction;
    constructor(public payload: {transactionId: string}) { }
}
export class SelectAllTransactionsAction implements Action {
    readonly type = TransactionsActionTypes.SelectAllTransactions;
}
export class DeselectAllTransactionsAction implements Action {
    readonly type = TransactionsActionTypes.DeselectAllTransactions;
}

// Editing
export class BeginEditTransactionAction implements Action {
    readonly type = TransactionsActionTypes.BeginEditTransaction;
    constructor(public payload: {transactionId: string}) { }
}
export class EndEditTransactionAction implements Action {
    readonly type = TransactionsActionTypes.EndEditTransaction;
}

export type TransactionsActions =
    | LoadTransactionsAction
    | LoadTransactionsSuccessAction
    | LoadTransactionsFailureAction
    | LoadTransactionsForAccountAction
    | LoadTransactionsForAccountSuccessAction
    | LoadTransactionsForAccountFailureAction
    | LoadRecentTransactionsByEnvelopeAction
    | LoadRecentTransactionsByEnvelopeSuccessAction
    | LoadRecentTransactionsByEnvelopeFailureAction
    | LoadPayeesAction
    | LoadPayeesSuccessAction
    | LoadPayeesFailureAction
    | ShowCreateTransactionAction
    | HideCreateTransactionAction
    | CreateTransactionAction
    | CreateTransactionSuccessAction
    | CreateTransactionFailureAction
    | UpdateTransactionAction
    | UpdateTransactionSuccessAction
    | UpdateTransactionFailureAction
    | DeleteTransactionsAction
    | DeleteTransactionsSuccessAction
    | DeleteTransactionsFailureAction
    | ConfirmDeleteTransactions
    | CancelDeleteTransactions
    | SetTransactionClearedAction
    | SetTransactionClearedSuccessAction
    | SetTransactionClearedFailureAction
    | SelectTransactionAction
    | DeselectTransactionAction
    | SelectAllTransactionsAction
    | DeselectAllTransactionsAction
    | BeginEditTransactionAction
    | EndEditTransactionAction;