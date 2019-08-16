import { Component, OnInit } from '@angular/core';
import { AssignIncomeService } from '../../services/assign-income.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'moneteer-assign-income-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(
        public service: AssignIncomeService,
        private route: ActivatedRoute) { }

    ngOnInit() {
    }

    submit() {
        this.service.submit(this.route.snapshot.params.budgetId);
    }
}
