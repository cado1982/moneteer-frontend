
import {empty as observableEmpty, of as observableOf,  Observable, of } from 'rxjs';

import {map, retry} from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { EnvelopeModel, PayeeModel } from "./../../core/models";
 
import { ApiBaseService } from "./api.base.service";
import { AuthService } from "./auth.service";
import { TransactionModel } from "../../accounts/models/index";
import { Store } from "@ngrx/store";
import { ITransactionsState } from "../reducers/transactions.reducer";
import { RecentTransactionByEnvelope } from '../models/recent.transaction.by.envelope.model';

@Injectable()
export class TransactionService extends ApiBaseService {

    constructor(http: HttpClient, authService: AuthService, private store: Store<ITransactionsState>) {
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

    public createTransaction(transactionModel: TransactionModel): Observable<TransactionModel> {
        this.validateTransaction(transactionModel);

        return this.post<TransactionModel ,TransactionModel>(`transaction`, transactionModel).pipe(
            map(t => this.processTransaction(t))
        );
    }

    public editTransaction(transactionModel: TransactionModel): Observable<TransactionModel> {
        this.validateTransaction(transactionModel);

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
        
        if (!transaction.assignments || transaction.assignments.length === 0) {
            transaction.envelope = undefined;
        } else if (transaction.assignments.length === 1) {
            transaction.envelope = transaction.assignments[0].envelope;
        } else if (transaction.assignments.length > 1) {
            transaction.envelope = new EnvelopeModel("Multiple Categories");
            transaction.envelope.id = "SplitCategory";
        }

        return transaction;
    }

    private validateTransaction(model: TransactionModel): void {
        if (!model) { throw new Error("transactionModel must be set"); }
        if (!model.account) { throw new Error("transaction.account must be set"); }
        if (!model.account.id) { throw new Error("transaction.account.uuid must be set"); }
        if (model.inflow && model.outflow) {
            throw new Error("Cannot have a transaction as both inflow and outflow");
        }
        if (!model.inflow && !model.outflow) { throw new Error("Must specify either inflow or outflow"); }
        if (model.account && model.targetAccount && model.account.id === model.targetAccount.id) {
            throw new Error("Cannot transfer to the same account");
        }
    }
}
