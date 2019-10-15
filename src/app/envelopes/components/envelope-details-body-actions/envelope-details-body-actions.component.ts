import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnvelopeDeleteModalComponent } from '../envelope-delete-modal/envelope-delete-modal.component';
import { EnvelopeModel } from 'src/app/core/models';
import { EnvelopeMoveBalanceModalComponent } from '../envelope-move-balance-modal/envelope-move-balance-modal.component';
import { EnvelopeSetBalanceZeroModalComponent } from '../envelope-set-balance-zero-modal/envelope-set-balance-zero-modal.component';
import { EnvelopeAssignIncomeModalComponent } from '../envelope-assign-income-modal/envelope-assign-income-modal.component';

@Component({
    selector: 'moneteer-envelope-details-body-actions',
    templateUrl: './envelope-details-body-actions.component.html',
    styleUrls: ['./envelope-details-body-actions.component.scss'],
    host: {
        "class": "d-flex flex-column align-items-stretch border-bottom pb-4 mb-4"
    }
})
export class EnvelopeDetailsBodyActionsComponent implements OnInit {

    @Input() public selectedEnvelope: EnvelopeModel | undefined;
    @Input() public availableIncomeEnvelope: EnvelopeModel;

    constructor(private modal: NgbModal) { }

    ngOnInit() {

    }

    deleteCategory() {
        if (!this.selectedEnvelope) return;

        let modalRef = this.modal.open(EnvelopeDeleteModalComponent);
        modalRef.componentInstance.envelope = this.selectedEnvelope;
    }

    moveBalance() {
        if (!this.selectedEnvelope || this.selectedEnvelope.balance <= 0) return;

        let modalRef = this.modal.open(EnvelopeMoveBalanceModalComponent);
        modalRef.componentInstance.fromEnvelope = this.selectedEnvelope;
    }

    setBalanceToZero() {
        if (!this.selectedEnvelope || this.selectedEnvelope.balance <= 0) return;

        let modalRef = this.modal.open(EnvelopeSetBalanceZeroModalComponent);
        modalRef.componentInstance.envelope = this.selectedEnvelope;
    }

    assignIncome() {
        if (!this.selectedEnvelope || this.availableIncomeEnvelope.balance <= 0) return;

        let modalRef = this.modal.open(EnvelopeAssignIncomeModalComponent);
        modalRef.componentInstance.availableIncomeEnvelope = this.availableIncomeEnvelope;
        modalRef.componentInstance.toEnvelope = this.selectedEnvelope;
    }
}
