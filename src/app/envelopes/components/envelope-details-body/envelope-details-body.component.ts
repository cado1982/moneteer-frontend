import { Component, OnInit, Input } from '@angular/core';
import { EnvelopeModel, EnvelopeCategoryModel } from 'src/app/core/models';

@Component({
    selector: 'moneteer-envelope-details-body',
    templateUrl: './envelope-details-body.component.html',
    styleUrls: ['./envelope-details-body.component.scss'],
    host: {
        'class': 'd-flex flex-column border-bottom border-right border-left overflow-auto p-4'
    }
})
export class EnvelopeDetailsBodyComponent implements OnInit {
    @Input() public selectedEnvelope: EnvelopeModel;
    @Input() public availableIncomeEnvelope: EnvelopeModel;

    constructor() { }

    ngOnInit() {
    }

}
