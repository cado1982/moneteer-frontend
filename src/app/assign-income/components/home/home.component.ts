import { Component, OnInit } from '@angular/core';
import { AssignIncomeService } from '../../services/assign-income.service';


@Component({
    selector: 'moneteer-assign-income-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [AssignIncomeService]
})
export class HomeComponent {

}
