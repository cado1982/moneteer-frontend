import { Component, OnInit, Input } from '@angular/core';
import { EnvelopesSelectionService } from '../../services/envelopes-selection.service';
import { EnvelopeModel } from 'src/app/core/models';

@Component({
    selector: 'moneteer-envelope-details-header',
    templateUrl: './envelope-details-header.component.html',
    styleUrls: ['./envelope-details-header.component.scss'],
    host: {
        'class': 'align-items-center'
    }
})
export class EnvelopeDetailsHeaderComponent implements OnInit {
    @Input() selectedEnvelope: EnvelopeModel | undefined;
    
    constructor() { }

    ngOnInit() {
    }

}
