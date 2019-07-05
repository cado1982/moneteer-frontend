import { Component, OnInit } from '@angular/core';
import { EnvelopesSelectionService } from '../../services/envelopes-selection.service';

@Component({
    selector: 'moneteer-envelope-details-header',
    templateUrl: './envelope-details-header.component.html',
    styleUrls: ['./envelope-details-header.component.scss']
})
export class EnvelopeDetailsHeaderComponent implements OnInit {

    constructor(public selectionService: EnvelopesSelectionService) { }

    ngOnInit() {
    }

}
