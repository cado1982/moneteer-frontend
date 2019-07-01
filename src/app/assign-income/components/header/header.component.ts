import { Component, OnInit, Input } from '@angular/core';
import { AssignIncomeService } from '../../services/assign-income.service';

@Component({
    selector: 'moneteer-assign-income-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(public service: AssignIncomeService) { }

    ngOnInit() {
    }

    canSubmit(): boolean {
        return this.service.assignedIncome <= this.service.availableIncome;
    }

}
