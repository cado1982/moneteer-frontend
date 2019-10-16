import { Component, OnInit } from '@angular/core';
import { RecentTransactionByEnvelope } from 'src/app/core/models/recent.transaction.by.envelope.model';
import { Observable, combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { ITransactionsState, getRecentTransactionsByEnvelope } from 'src/app/core/reducers/transactions.reducer';
import { map } from 'rxjs/operators';
import { getSelectedEnvelope } from 'src/app/core/reducers/envelopes.reducer';

@Component({
    selector: 'moneteer-envelope-details-body-recent-transactions',
    templateUrl: './envelope-details-body-recent-transactions.component.html',
    styleUrls: ['./envelope-details-body-recent-transactions.component.scss'],
    host: { 'class': 'pb-4 mb-4' }
})
export class EnvelopeDetailsBodyRecentTransactionsComponent implements OnInit {
    public recentTransactions$: Observable<RecentTransactionByEnvelope[]>;

    constructor(private store: Store<ITransactionsState>) { }

    ngOnInit() {
        this.recentTransactions$ = combineLatest(this.store.select(getRecentTransactionsByEnvelope), this.store.select(getSelectedEnvelope)).pipe(
            map(([recentTransactions, selectedEnvelope]) => recentTransactions.filter(rt => !!selectedEnvelope && rt.envelopeId === selectedEnvelope.id ))
        );
    }
}
