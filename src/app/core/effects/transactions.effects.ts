import { Injectable } from "@angular/core";

import { TransactionService } from "../../core/services";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TransactionsActionTypes, LoadTransactionsAction, LoadTransactionsSuccessAction,
         CreateTransactionAction, CreateTransactionSuccessAction, UpdateTransactionAction, UpdateTransactionSuccessAction, 
         DeleteTransactionsAction, DeleteTransactionsSuccessAction, DeleteTransactionsFailureAction, LoadTransactionsFailureAction, 
         CreateTransactionFailureAction, UpdateTransactionFailureAction, SetTransactionClearedAction, SetTransactionClearedSuccessAction, SetTransactionClearedFailureAction, DeselectAllTransactionsAction, LoadPayeesAction, LoadPayeesSuccessAction, LoadPayeesFailureAction } from "../actions/transactions.actions";
import { switchMap, map, filter, mergeMap, first } from "rxjs/operators";
import { of } from "rxjs";
import { catchError } from "rxjs/internal/operators/catchError";
import { LoadEnvelopesAction } from "../actions/envelopes.actions";
import { getActiveBudget, IBudgetsState } from "../reducers/budget.reducer";
import { PayeeService } from "../services/payee.service";
import { LoadBudgetAction } from "../actions/budget.actions";
import { BudgetModel } from "../models";

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
        switchMap(() => this.budgetStore.select(getActiveBudget).pipe(
            first(),
            filter((activeBudget: BudgetModel | null): activeBudget is BudgetModel => activeBudget !== null ),
            switchMap(activeBudget => [
                new LoadEnvelopesAction({budgetId: activeBudget.id}),
                new LoadBudgetAction({budgetId: activeBudget.id})
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
                new LoadBudgetAction({budgetId: activeBudget.id})
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
        mergeMap(() => this.budgetStore.select(getActiveBudget).pipe(
            first(),
            filter((activeBudget: BudgetModel | null): activeBudget is BudgetModel => activeBudget !== null ),
            switchMap(activeBudget => [
                new DeselectAllTransactionsAction(),
                new LoadEnvelopesAction({budgetId: activeBudget.id}),
                new LoadBudgetAction({budgetId: activeBudget.id})
            ])
        ))
    );

    @Effect() setTransactionCleared$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.SetTransactionCleared),
        map((action: SetTransactionClearedAction) => action.payload),
        mergeMap(payload => this.transactionService.setTransactionIsCleared(payload.transactionId, payload.isCleared).pipe(
            map(() => new SetTransactionClearedSuccessAction({transactionId: payload.transactionId, isCleared: payload.isCleared})),
            catchError(error => of(new SetTransactionClearedFailureAction({error, transactionId: payload.transactionId, originalState: !payload.isCleared })))
        )
    ));

    @Effect() loadPayees$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.LoadPayees),
        map((action: LoadPayeesAction) => action.payload),
        mergeMap(payload => this.payeeService.getAllPayeesByBudget(payload.budgetId).pipe(
            map(payees => new LoadPayeesSuccessAction({payees})),
            catchError(err => of(new LoadPayeesFailureAction(err)))
        )   
    ));
}