import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnvelopeDeleteModalComponent } from '../envelope-delete-modal/envelope-delete-modal.component';
import { EnvelopeModel } from 'src/app/core/models';

@Component({
    selector: 'moneteer-envelope-details-body-actions',
    templateUrl: './envelope-details-body-actions.component.html',
    styleUrls: ['./envelope-details-body-actions.component.scss'],
    host: {
        "class": "d-inline-flex flex-column align-items-baseline"
    }
})
export class EnvelopeDetailsBodyActionsComponent implements OnInit {

    @Input() public selectedEnvelope: EnvelopeModel | undefined;

    constructor(private modal: NgbModal) { }

    ngOnInit() {
    }

    deleteCategory() {
        if (!this.selectedEnvelope) return;

        let modalRef = this.modal.open(EnvelopeDeleteModalComponent);
        modalRef.componentInstance.envelope = this.selectedEnvelope;
    }
}
