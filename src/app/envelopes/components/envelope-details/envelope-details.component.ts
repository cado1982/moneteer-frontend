import { Component, OnInit, HostBinding } from '@angular/core';
import { EnvelopesSelectionService } from '../../services/envelopes-selection.service';

@Component({
    selector: 'moneteer-envelope-details',
    templateUrl: './envelope-details.component.html',
    styleUrls: ['./envelope-details.component.scss']
})
export class EnvelopeDetailsComponent implements OnInit {

    @HostBinding('class.hidden') get isHidden() { return !this.selectionService.selectedEnvelope; }

    constructor(public selectionService: EnvelopesSelectionService) { }

    ngOnInit() {
    }

}
