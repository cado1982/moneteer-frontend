import { Component, OnInit, Input } from '@angular/core';
import { EnvelopeModel } from 'src/app/core/models';
import { AssignIncomeService } from '../../services/assign-income.service';

@Component({
    selector: 'moneteer-assign-income-envelope-list',
    templateUrl: './envelope-list.component.html',
    styleUrls: ['./envelope-list.component.scss']
})
export class EnvelopeListComponent implements OnInit {

    constructor(private service: AssignIncomeService) {

    }

    ngOnInit() {
    }

}
