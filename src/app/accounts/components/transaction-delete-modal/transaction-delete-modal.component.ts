import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Actions, ofType } from '@ngrx/effects';
import { TransactionsActionTypes, DeleteTransactionsAction } from 'src/app/core/actions/transactions.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ITransactionsState, getSelectedTransactions } from 'src/app/core/reducers/transactions.reducer';
import { map } from 'rxjs/operators';
import { TransactionModel } from '../../models';

@Component({
    selector: 'moneteer-transaction-delete-modal',
    templateUrl: './transaction-delete-modal.component.html',
    styleUrls: ['./transaction-delete-modal.component.scss']
})
export class TransactionDeleteModalComponent implements OnInit {

    public selectedTransactions: TransactionModel[] = [];

    constructor(
        private modal: NgbActiveModal, 
        private actions$: Actions, 
        private store: Store<ITransactionsState>) { 

    }

    ngOnInit() {
        this.actions$.pipe(
            ofType(TransactionsActionTypes.DeleteTransactionsSuccess)
        ).subscribe(() => {
            this.modal.close();
        });

        this.actions$.pipe(
            ofType(TransactionsActionTypes.DeleteTransactionsFailure)
        ).subscribe(() => {
            // show error
        });
    }

    public deleteTransactions(): void {
        if (this.selectedTransactions.length === 0) {
            return;
        }

        this.store.dispatch(new DeleteTransactionsAction({transactions: this.selectedTransactions}));
    }
}
