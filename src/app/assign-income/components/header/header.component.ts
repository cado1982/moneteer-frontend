import { Component, OnInit } from '@angular/core';
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

    submit() {
        this.service.submit();
    }
}
