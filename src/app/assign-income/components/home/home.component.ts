import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvelopeModel } from 'src/app/core/models';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { IEnvelopesState, getAvailable, getEnvelopes } from 'src/app/core/reducers/envelopes.reducer';
import { AssignIncomeService } from '../../services/assign-income.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'moneteer-assign-income-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [AssignIncomeService]
})
export class HomeComponent implements OnInit {

    public currentlyAssigned = 0;
    public availableIncome = 0;

    public envelopes$: Observable<EnvelopeModel[]>;

    constructor(private actions$: Actions, private store: Store<IEnvelopesState>, private route: ActivatedRoute, private service: AssignIncomeService) { 
        
    }

    ngOnInit() {
        if (!this.route.snapshot.parent || !this.route.snapshot.parent.parent || !this.route.snapshot.parent.parent.params || !this.route.snapshot.parent.parent.params.budgetId) {
            throw new Error("Unable to find budgetId from route");
        }

        this.store.select(getAvailable).subscribe(a => this.availableIncome = a);
        this.envelopes$ = this.store.select(getEnvelopes);
        this.service.budgetId = this.route.snapshot.parent.parent.params.budgetId;
    }
}
