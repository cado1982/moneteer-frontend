import { Component, OnInit, Input } from '@angular/core';
import { EnvelopeModel } from 'src/app/core/models';

@Component({
    selector: 'moneteer-envelope-details-body-stats',
    templateUrl: './envelope-details-body-stats.component.html',
    styleUrls: ['./envelope-details-body-stats.component.scss'],
    host: { 'class': 'border-bottom d-flex flex-column pb-4 mb-4' }
})
export class EnvelopeDetailsBodyStatsComponent implements OnInit {
    @Input() public selectedEnvelope: EnvelopeModel | undefined;
    
    constructor() { }

    ngOnInit() {
    }

}
