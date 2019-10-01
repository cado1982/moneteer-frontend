
import {empty as observableEmpty, of as observableOf,  Observable, of, throwError } from 'rxjs';

import {map, retry, catchError} from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { PayeeModel } from "./../../core/models";
 
import { ApiBaseService } from "./api.base.service";
import { AuthService } from "./auth.service";
import { TransactionModel } from "../../accounts/models/index";
import { RecentTransactionByEnvelope } from '../models/recent.transaction.by.envelope.model';
import { TransactionCreateModel } from '../models/transaction.create.model';

@Injectable()
export class TransactionService extends ApiBaseService {

    constructor(http: HttpClient, authService: AuthService) {
        super(http, authService);
    }

    public getTransactionsForBudget(budgetId: string): Observable<Array<TransactionModel>> {
        return this.get<Array<TransactionModel>>(`budget/${budgetId}/transactions`).pipe(
            map(t => this.processTransactions(t))
        );
    }

    public getRecentTransactionsForEnvelopes(budgetId: string): Observable<Array<RecentTransactionByEnvelope>> {
        return this.get<Array<RecentTransactionByEnvelope>>(`budget/${budgetId}/recenttransactions`);
    }

    public getTransactionsForAccount(accountId: string): Observable<Array<TransactionModel>> {
        return this.get<Array<TransactionModel>>(`account/${accountId}/transactions`).pipe(
            map(t => this.processTransactions(t))
        );
    }

    public deleteTransactions(transactions: Array<TransactionModel>): Observable<TransactionModel[]> {
        if (!transactions || transactions.length === 0) {
            return observableEmpty();
        }

        const transactionIds: string[] = transactions.map(t => t.id);

        return this.deleteWithBody("transaction", transactionIds).pipe(
            retry(2),
            map(() => transactions)
        );
    }

    public createTransaction(transactionCreateModel: TransactionCreateModel): Observable<TransactionModel> {
        return this.post<TransactionCreateModel, TransactionModel>(`transaction`, transactionCreateModel).pipe(
            map(t => this.processTransaction(t))
        );
    }

    public editTransaction(transactionModel: TransactionModel): Observable<TransactionModel> {
        return this.put<TransactionModel, TransactionModel>(`transaction`, transactionModel).pipe(
            map(t => this.processTransaction(t))
        );
    }

    public setTransactionIsCleared(transactionId: string, isCleared: boolean): Observable<void> {
        if (!transactionId) { throw new Error("transactionId must be set"); }

        return this.put<boolean, void>(`transaction/${transactionId}/setCleared`, isCleared);
    }

    public editPayee(payeeModel: PayeeModel): Observable<PayeeModel> {
        if (!payeeModel) { throw new Error("payeeModel must be set"); }
        if (!payeeModel.name) { throw new Error("payeeModel.name must be set"); }

        return observableOf(payeeModel);
    }

    private processTransactions(transactions: Array<TransactionModel>): Array<TransactionModel> {
        transactions.map(t => this.processTransaction(t));

        return transactions;
    }

    private processTransaction(transaction: TransactionModel): TransactionModel {
        if (!transaction) { throw new Error("transaction must be provided"); }
        transaction.date = new Date(transaction.date);

        return transaction;
    }

    // private getAssignmentsTotalInflow(model: TransactionModel): number {
    //     if (!model || !model.assignments || model.assignments.length === 0) return 0;
        
    //     return model.assignments.reduce((total, a) => total + a.inflow, 0);
    // }

    // private getAssignmentsTotalOutflow(model: TransactionModel): number {
    //     if (!model || !model.assignments || model.assignments.length === 0) return 0;
        
    //     return model.assignments.reduce((total, a) => total + a.outflow, 0);
    // }
}
