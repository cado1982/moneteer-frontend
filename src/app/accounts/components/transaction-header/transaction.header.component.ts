import {distinctUntilChanged, debounceTime} from "rxjs/operators";
import { Component, OnInit,  } from "@angular/core";
import { Observable ,  Subject } from "rxjs";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/finally";
import "rxjs/add/operator/distinctUntilChanged";
import { Store, select } from "@ngrx/store";

import { TransactionModel } from "../../models/index";
import { ITransactionsState, getIsDeleting, getSelectedTransactions, CreateTransactionMode } from "../../../core/reducers/transactions.reducer";
import { ShowCreateTransactionAction, DeleteTransactionsAction, TransactionsActionTypes, TransactionsActions } from "../../../core/actions/transactions.actions";
import { Actions, ofType } from "@ngrx/effects";
import { take } from "rxjs/operators";

@Component({
  selector: "moneteer-transaction-header",
  templateUrl: "./transaction.header.component.html",
  styleUrls: ["./transaction.header.component.scss"]
})
export class TransactionHeaderComponent implements OnInit {
    public transactionSearchTerm$ = new Subject<string>();
    public selectedTransactions$: Observable<TransactionModel[]>;

    public isConfirmingDelete: boolean;
    public isDeleting$: Observable<boolean>;

    constructor(
        private store: Store<ITransactionsState>,
        private actions$: Actions<TransactionsActions>
    ) { 

    }

    ngOnInit(): void {
        this.transactionSearchTerm$.pipe(debounceTime(400),distinctUntilChanged()).subscribe(t => console.log(t));

        this.isDeleting$ = this.store.pipe(select(getIsDeleting));
        this.selectedTransactions$ = this.store.pipe(select(getSelectedTransactions));
        
        this.actions$.pipe(
            ofType(TransactionsActionTypes.DeleteTransactionsSuccess)
        ).subscribe(() => {
            this.isConfirmingDelete = false; 
        });
    }

    public addInflow(): void {
        this.store.dispatch(new ShowCreateTransactionAction({mode: CreateTransactionMode.Inflow}));
    }

    public addOutflow(): void {
        this.store.dispatch(new ShowCreateTransactionAction({mode: CreateTransactionMode.Outflow}));
    }

    public cancel(): void {
        this.isConfirmingDelete = false;
    }

    public confirmDeleteTransactions(): void {
        this.isConfirmingDelete = true;
    }

    public deleteTransactions(): void {
        this.store.select(getSelectedTransactions).pipe(take(1)).subscribe(transactions => {
            this.store.dispatch(new DeleteTransactionsAction({transactions: transactions}));
        });
    }
}
