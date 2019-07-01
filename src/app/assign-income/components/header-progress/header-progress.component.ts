import { Component, OnInit, Input } from '@angular/core';
import { AssignIncomeService } from '../../services/assign-income.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'moneteer-assign-income-header-progress',
    templateUrl: './header-progress.component.html',
    styleUrls: ['./header-progress.component.scss']
})
export class HeaderProgressComponent implements OnInit {
    constructor(public service: AssignIncomeService) {
        
    }

    ngOnInit() {

    }

}
