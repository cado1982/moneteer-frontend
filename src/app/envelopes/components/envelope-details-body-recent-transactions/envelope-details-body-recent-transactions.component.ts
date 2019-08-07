import { Component, OnInit } from '@angular/core';
import { TransactionModel } from 'src/app/accounts/models';

@Component({
    selector: 'moneteer-envelope-details-body-recent-transactions',
    templateUrl: './envelope-details-body-recent-transactions.component.html',
    styleUrls: ['./envelope-details-body-recent-transactions.component.scss'],
    host: {
        'class': 'm-3'
    }
})
export class EnvelopeDetailsBodyRecentTransactionsComponent implements OnInit {

    public recentTransactions: TransactionModel[] = [];
    constructor() { }

    ngOnInit() {
    }

}
