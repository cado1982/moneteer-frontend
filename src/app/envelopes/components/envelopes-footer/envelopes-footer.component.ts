import { Component, OnInit, ViewChild } from '@angular/core';
import { EnvelopesAddModalComponent } from '../envelopes-add-modal/envelopes-add-modal.component';

@Component({
    selector: 'moneteer-envelopes-footer',
    templateUrl: './envelopes-footer.component.html',
    styleUrls: ['./envelopes-footer.component.scss']
})
export class EnvelopesFooterComponent implements OnInit {


    @ViewChild(EnvelopesAddModalComponent, {static: true}) public addEnvelopeModal: EnvelopesAddModalComponent

    constructor() { }

    ngOnInit() {
    }

    addEnvelope(): void {
        this.addEnvelopeModal.open();
    }

}
