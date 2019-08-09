import { Component, OnInit, Input } from '@angular/core';
import { EnvelopeModel } from 'src/app/core/models';

@Component({
    selector: 'moneteer-envelope-details-body',
    templateUrl: './envelope-details-body.component.html',
    styleUrls: ['./envelope-details-body.component.scss'],
    host: {
        "class": "d-inline-flex flex-column border-bottom border-right border-left overflow-auto"
    }
})
export class EnvelopeDetailsBodyComponent implements OnInit {
    @Input() public selectedEnvelope: EnvelopeModel;

    constructor() { }

    ngOnInit() {
    }

}
