import { Injectable } from "@angular/core";

import { TransactionService, EnvelopesService } from "../../core/services";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { Store, Action } from "@ngrx/store";
import { TransactionsActionTypes, LoadTransactionsAction, LoadTransactionsSuccessAction,
         CreateTransactionAction, CreateTransactionSuccessAction, UpdateTransactionAction, UpdateTransactionSuccessAction, 
         DeleteTransactionsAction, DeleteTransactionsSuccessAction, DeleteTransactionsFailureAction, LoadTransactionsFailureAction, 
         CreateTransactionFailureAction, UpdateTransactionFailureAction, SetTransactionClearedAction, SetTransactionClearedSuccessAction, SetTransactionClearedFailureAction, DeselectTransactionAction, DeselectAllTransactionsAction, SelectTransactionAction, LoadPayeesAction, LoadPayeesSuccessAction, LoadPayeesFailureAction } from "../actions/transactions.actions";
import { switchMap, map, tap, filter, flatMap, mergeMap } from "rxjs/operators";
import { of, Observable, pipe } from "rxjs";
import { catchError } from "rxjs/internal/operators/catchError";
import { LoadEnvelopesAction, LoadEnvelopesSuccessAction } from "../actions/envelopes.actions";
import { getActiveBudget, IBudgetsState } from "../reducers/budget.reducer";
import { PayeeService } from "../services/payee.service";
import { LoadBudgetAction } from "../actions/budget.actions";
import { concatMapTo } from "rxjs/internal/operators/concatMapTo";
import { switchMapTo } from "rxjs/internal/operators/switchMapTo";
import { mergeMapTo } from "rxjs/internal/operators/mergeMapTo";

@Injectable()
export class TransactionsEffects {
    constructor(
        private transactionService: TransactionService,
        private envelopesService: EnvelopesService,
        private payeeService: PayeeService,
        private budgetStore: Store<IBudgetsState>,
        private actions$: Actions
    ) { }

    @Effect() loadTransactions$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.LoadTransactions),
        map((action: LoadTransactionsAction) => action.payload),
        switchMap(payload => this.transactionService.getTransactionsForBudget(payload.budgetId).pipe(
            map(transactions => new LoadTransactionsSuccessAction({transactions})),
            catchError(error => of(new LoadTransactionsFailureAction({error: error.message})))
        )   
    ));

    @Effect() createTransaction$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.CreateTransaction),
        map((action: CreateTransactionAction) => action.payload),
        switchMap(payload => this.transactionService.createTransaction(payload.transaction).pipe(
            map(transaction => new CreateTransactionSuccessAction({transaction})),
            catchError(error => of(new CreateTransactionFailureAction(error)))    
        )  
    ));

    /*@Effect() createTransactionSuccess$: Observable<Action> = this.actions$.pipe(
        ofType(TransactionsActionTypes.CreateTransactionSuccess),
        switchMap((action: CreateTransactionSuccessAction) => this.budgetStore.select(getActiveBudget)),
        filter(activeBudget => activeBudget !== undefined),
        switchMap(activeBudget => [
            new LoadEnvelopesAction({budgetId: activeBudget!.id}),
            new LoadBudgetAction({budgetId: activeBudget!.id})
        ])
    );*/

    @Effect() updateTransaction$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.UpdateTransaction),
        map((action: UpdateTransactionAction) => action.payload),
        mergeMap(payload => this.transactionService.editTransaction(payload.transaction).pipe(
            map(transaction => new UpdateTransactionSuccessAction({transaction})),
            catchError(error => of(new UpdateTransactionFailureAction({error, transaction: payload.transaction})))
        )
    ));

    /*@Effect() updateTransactionSuccess$: Observable<Action> = this.actions$.pipe(
        ofType(TransactionsActionTypes.UpdateTransactionSuccess),
        switchMap((action: UpdateTransactionSuccessAction) => this.budgetStore.select(getActiveBudget)),
        filter(activeBudget => activeBudget !== undefined),
        flatMap(activeBudget => [
            new LoadEnvelopesAction({budgetId: activeBudget!.id}),
            new LoadBudgetAction({budgetId: activeBudget!.id})
        ])
    );*/

    @Effect() deleteTransactions$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.DeleteTransactions),
        map((action: DeleteTransactionsAction) => action.payload),
        switchMap(payload => this.transactionService.deleteTransactions(payload.transactions).pipe(
            map(transactions => new DeleteTransactionsSuccessAction({transactions})),
            catchError(error => of(new DeleteTransactionsFailureAction(error)))
        )
    ));

    @Effect() deleteTransactionsSuccess$: Observable<Action> = this.actions$.pipe(
        ofType(TransactionsActionTypes.DeleteTransactionsSuccess),
        switchMap((action: DeleteTransactionsSuccessAction) => this.budgetStore.select(getActiveBudget)),
        filter(activeBudget => activeBudget !== undefined),
        map(activeBudget => new DeselectAllTransactionsAction())
    );

    @Effect() setTransactionCleared$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.SetTransactionCleared),
        map((action: SetTransactionClearedAction) => action.payload),
        switchMap(payload => this.transactionService.setTransactionIsCleared(payload.transactionId, payload.isCleared).pipe(
            map(response => new SetTransactionClearedSuccessAction({transactionId: response.transactionId, isCleared: response.isCleared})),
            catchError(error => of(new SetTransactionClearedFailureAction({error, transactionId: payload.transactionId, originalState: !payload.isCleared })))
        )
    ));

    @Effect() loadPayees$ = this.actions$.pipe(
        ofType(TransactionsActionTypes.LoadPayees),
        map((action: LoadPayeesAction) => action.payload),
        switchMap(payload => this.payeeService.getAllPayeesByBudget(payload.budgetId).pipe(
            map(payees => new LoadPayeesSuccessAction({payees})),
            catchError(err => of(new LoadPayeesFailureAction(err)))
        )   
    ));
}