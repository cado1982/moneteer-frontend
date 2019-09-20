import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'moneteer-transaction-actions',
    templateUrl: './transaction-actions.component.html',
    styleUrls: ['./transaction-actions.component.scss', './../../styles/transaction.scss']
})
export class TransactionActionsComponent implements OnInit {
    @Output() public save: EventEmitter<void> = new EventEmitter<void>();
    @Output() public cancel: EventEmitter<void> = new EventEmitter<void>();

    constructor() { }

    ngOnInit() {
    }

}
