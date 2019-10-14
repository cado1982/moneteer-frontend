import { Component, OnInit } from '@angular/core';
import { AssignIncomeService } from '../../services/assign-income.service';
import { Router } from '@angular/router';

@Component({
    selector: 'moneteer-assign-income-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(public service: AssignIncomeService, public router: Router) { }

    ngOnInit() {
    }

    cancel() {
        this.router.navigateByUrl("./..");
    }
}
