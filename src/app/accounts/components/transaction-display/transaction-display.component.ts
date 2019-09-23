import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { TransactionModel } from '../../models';
import { Store } from '@ngrx/store';
import { ITransactionsState, getIsTransactionSelected } from 'src/app/core/reducers/transactions.reducer';
import { SetTransactionClearedAction, SelectTransactionAction, DeselectTransactionAction } from 'src/app/core/actions/transactions.actions';
import { Observable } from 'rxjs';

@Component({
    selector: 'moneteer-transaction-display',
    templateUrl: './transaction-display.component.html',
    styleUrls: ['./transaction-display.component.scss', './../../styles/transaction.scss']
})
export class TransactionDisplayComponent implements OnInit {
    @Input() public transaction: TransactionModel;
    @Input() public currentAccountId: string;

    public isSelected$: Observable<boolean>;

    public get inflow(): number {
        return this.transaction.assignments.reduce((total, a) => total += a.inflow, 0);
    }
    
    public get outflow(): number {
        return this.transaction.assignments.reduce((total, a) => total += a.outflow, 0);
    }

    public get envelopeName(): string {
        if (this.transaction.assignments.length > 1) {
            return "Multiple Envelopes"
        } else if (this.transaction.assignments[0].envelope) {
            return this.transaction.assignments[0].envelope.name;
        } else {
            return "";
        }
    }

    public click(): void {
        this.store.dispatch(new SelectTransactionAction({transactionId: this.transaction.id}));
    }

    public selected(event: any): void {
        event.stopPropagation();

        if (event && event.target) {
            const isChecked = event.target.checked;

            if (isChecked) {
                this.store.dispatch(new SelectTransactionAction({transactionId: this.transaction.id}));
            } else {
                this.store.dispatch(new DeselectTransactionAction({transactionId: this.transaction.id}));
            }
        }
    }

    public cleared(event: any): void {
        event.stopPropagation();

        if (event && event.target) {
            const isChecked = event.target.checked;

            this.store.dispatch(new SetTransactionClearedAction({ transaction: this.transaction, isCleared: isChecked}));
        }
    }

    constructor(public store: Store<ITransactionsState>) { }

    ngOnInit() {
        this.isSelected$ = this.store.select(getIsTransactionSelected, {transactionId: this.transaction.id});
    }
}
