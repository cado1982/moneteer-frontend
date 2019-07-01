import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvelopeModel } from 'src/app/core/models';
import { Actions } from '@ngrx/effects';


@Component({
    selector: 'moneteer-assign-income-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public currentlyAssigned = 545.67;
    public availableIncome = 2000;

    public envelopes: Observable<EnvelopeModel>;

    constructor(private actions$: Actions) { }

    ngOnInit() {

    }

}
