import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { TransactionModel } from '../../models';
import { Store } from '@ngrx/store';
import { ITransactionsState } from 'src/app/core/reducers/transactions.reducer';
import { SetTransactionClearedAction } from 'src/app/core/actions/transactions.actions';

@Component({
    selector: 'moneteer-transaction-display',
    templateUrl: './transaction-display.component.html',
    styleUrls: ['./transaction-display.component.scss', './../../styles/transaction.scss']
})
export class TransactionDisplayComponent implements OnInit, OnChanges {
    @Input() public transaction: TransactionModel;
    @Input() public currentAccountId: string;

    @Input() public isChecked: boolean;

    private _isCleared: boolean;
    public get isCleared(): boolean {
        return this._isCleared;
    }
    public set isCleared(newValue: boolean) {
        if (this._isCleared === newValue) return;

        this._isCleared = newValue;
        this.store.dispatch(new SetTransactionClearedAction({ transaction: this.transaction, isCleared: newValue }));
    }

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
        this.isChecked = true;
    }

    constructor(public store: Store<ITransactionsState>) { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.transaction) {
            this.isCleared = this.transaction.isCleared;
        }
    }

}
