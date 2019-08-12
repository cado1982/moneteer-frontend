import { Injectable } from "@angular/core";

import { TransactionService } from "../../core/services";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TransactionsActionTypes, LoadTransactionsAction, LoadTransactionsSuccessAction,
         CreateTransactionAction, CreateTransactionSuccessAction, UpdateTransactionAction, UpdateTransactionSuccessAction, 
         DeleteTransactionsAction, DeleteTransactionsSuccessAction, DeleteTransactionsFailureAction, LoadTransactionsFailureAction, 
         CreateTransactionFailureAction, UpdateTransactionFailureAction, SetTransactionClearedAction, SetTransactionClearedSuccessAction,
         SetTransactionClearedFailureAction, LoadPayeesAction, LoadPayeesSuccessAction, LoadPayeesFailureAction,
         LoadTransactionsForAccountAction, LoadTransactionsForAccountSuccessAction,
         LoadTransactionsForAccountFailureAction, LoadRecentTransactionsByEnvelopeAction,
         LoadRecentTransactionsByEnvelopeSuccessAction, LoadRecentTransactionsByEnvelopeFailureAction, 
         DeselectAllTransactionsAction } from "../actions/transactions.actions";
import { switchMap, map, filter, mergeMap, first } from "rxjs/operators";
import { of } from "rxjs";
import { catchError } from "rxjs/internal/operators/catchError";
import { LoadEnvelopesAction } from "../actions/envelopes.actions";
import { getActiveBudget, IBudgetsState } from "../reducers/budget.reducer";
import { PayeeService } from "../services/payee.service";
import { LoadBudgetAction } from "../actions/budget.actions";
import { BudgetModel } from "../models";
import { LoadSingleAccountAction, LoadAllAccountsAction } from "../actions/accounts.actions";

@Injectable()
export class TransactionsEffects {
    constructor(
        private transactionService: TransactionService,
        private payeeService: PayeeService,
        private budgetStore: Store<IBudgetsState>,
        private actions$: Actions
    ) { }

    @Effect() loadTransactions$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.LoadTransactions),
        map((action: LoadTransactionsAction) => action.payload),
        mergeMap(payload => this.transactionService.getTransactionsForBudget(payload.budgetId).pipe(
            map(transactions => new LoadTransactionsSuccessAction({transactions})),
            catchError(error => of(new LoadTransactionsFailureAction({error: error.message})))
        )   
    ));

    @Effect() loadTransactionsForAccount$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.LoadTransactionsForAccount),
        map((action: LoadTransactionsForAccountAction) => action.payload),
        mergeMap(payload => this.transactionService.getTransactionsForAccount(payload.accountId).pipe(
            map(transactionsForAccount => new LoadTransactionsForAccountSuccessAction({transactionsForAccount})),
            catchError(error => of(new LoadTransactionsForAccountFailureAction({error: error.message})))
        )   
    ));

    @Effect() loadRecentTransactionsByEnvelope$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.LoadRecentTransactionsByEnvelope),
        map((action: LoadRecentTransactionsByEnvelopeAction) => action.payload),
        mergeMap(payload => this.transactionService.getRecentTransactionsForEnvelopes(payload.budgetId).pipe(
            map(recentTransactions => new LoadRecentTransactionsByEnvelopeSuccessAction({recentTransactions})),
            catchError(error => of(new LoadRecentTransactionsByEnvelopeFailureAction({error: error.message})))
        )   
    ));

    @Effect() createTransaction$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.CreateTransaction),
        map((action: CreateTransactionAction) => action.payload),
        mergeMap(payload => this.transactionService.createTransaction(payload.transaction).pipe(
            map(transaction => new CreateTransactionSuccessAction({transaction})),
            catchError(error => of(new CreateTransactionFailureAction(error)))    
        )  
    ));

    
    @Effect() createTransactionSuccess$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.CreateTransactionSuccess),
        switchMap((action: CreateTransactionSuccessAction) => this.budgetStore.select(getActiveBudget).pipe(
            first(),
            filter((activeBudget: BudgetModel | null): activeBudget is BudgetModel => activeBudget !== null ),
            switchMap(activeBudget => [
                new LoadEnvelopesAction({budgetId: activeBudget.id}),
                new LoadBudgetAction({budgetId: activeBudget.id}),
                new LoadSingleAccountAction({accountId: action.payload.transaction.account.id}),
                new DeselectAllTransactionsAction()
            ])
        ))
    );

    @Effect() updateTransaction$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.UpdateTransaction),
        map((action: UpdateTransactionAction) => action.payload),
        mergeMap(payload => this.transactionService.editTransaction(payload.transaction).pipe(
            map(transaction => new UpdateTransactionSuccessAction({transaction})),
            catchError(error => of(new UpdateTransactionFailureAction({error, transaction: payload.transaction})))
        )
    ));

    @Effect() updateTransactionSuccess$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.UpdateTransactionSuccess),
        switchMap(() => this.budgetStore.select(getActiveBudget).pipe(
            first(),
            filter((activeBudget: BudgetModel | null): activeBudget is BudgetModel => activeBudget !== null ),
            switchMap(activeBudget => [
                new LoadEnvelopesAction({budgetId: activeBudget.id}),
                new LoadBudgetAction({budgetId: activeBudget.id}),
                new DeselectAllTransactionsAction()
            ])
        ))
    );

    @Effect() deleteTransactions$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.DeleteTransactions),
        map((action: DeleteTransactionsAction) => action.payload),
        mergeMap(payload => this.transactionService.deleteTransactions(payload.transactions).pipe(
            map(transactions => new DeleteTransactionsSuccessAction({transactions})),
            catchError(error => of(new DeleteTransactionsFailureAction(error)))
        )
    ));

    @Effect() deleteTransactionsSuccess$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.DeleteTransactionsSuccess),
        mergeMap((action: DeleteTransactionsSuccessAction) => this.budgetStore.select(getActiveBudget).pipe(
            first(),
            filter((activeBudget: BudgetModel | null): activeBudget is BudgetModel => activeBudget !== null ),
            switchMap(activeBudget => [
                new DeselectAllTransactionsAction(),
                new LoadEnvelopesAction({budgetId: activeBudget.id}),
                new LoadBudgetAction({budgetId: activeBudget.id}),
                new LoadAllAccountsAction({budgetId: activeBudget.id})
            ])
        ))
    );

    @Effect() setTransactionCleared$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.SetTransactionCleared),
        map((action: SetTransactionClearedAction) => action.payload),
        mergeMap(payload => this.transactionService.setTransactionIsCleared(payload.transaction.id, payload.isCleared).pipe(
            map(() => new SetTransactionClearedSuccessAction({transaction: payload.transaction, isCleared: payload.isCleared})),
            catchError(error => of(new SetTransactionClearedFailureAction({error, transaction: payload.transaction, originalState: !payload.isCleared })))
        )
    ));

    @Effect() setTransactionClearedSuccess$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.SetTransactionClearedSuccess),
        map((action: SetTransactionClearedAction) => new LoadSingleAccountAction({ accountId: action.payload.transaction.account.id}))
    );

    @Effect() loadPayees$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.LoadPayees),
        map((action: LoadPayeesAction) => action.payload),
        mergeMap(payload => this.payeeService.getAllPayeesByBudget(payload.budgetId).pipe(
            map(payees => new LoadPayeesSuccessAction({payees})),
            catchError(err => of(new LoadPayeesFailureAction(err)))
        )   
    ));
}