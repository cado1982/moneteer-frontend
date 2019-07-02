import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IEnvelopesState, getAvailable, getEnvelopes } from 'src/app/core/reducers/envelopes.reducer';
import { EnvelopeModel } from 'src/app/core/models';
import { AssignIncomeRequestAction, EnvelopesActionTypes, AssignIncomeFailureAction } from 'src/app/core/actions/envelopes.actions';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { AssignIncomeRequest, AssignIncome } from 'src/app/core/models/assign.income.request';
import { Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

@Injectable()
export class AssignIncomeService {
    private _assignedIncome: number = 0;
    public get assignedIncome(): number {
        return this._assignedIncome;
    }
    public set assignedIncome(newValue: number) {
        this._assignedIncome = newValue;
        this.percentageAssigned = newValue === 0 ? 0 : (newValue / this.availableIncome) * 100;
    }

    public percentageAssigned: number = 0;
    public availableIncome: number = 0;
    public envelopes: EnvelopeModel[] = [];
    public assignments: AssignIncome[] = [];
    public isBusy: boolean = false;
    
    public budgetId: string;

    constructor(private store: Store<IEnvelopesState>, private actions$: Actions) {
        this.store.select(getAvailable).subscribe(a => this.availableIncome = a);
        this.store.select(getEnvelopes).subscribe(e => this.envelopes = e);
        this.actions$.pipe(
            ofType(EnvelopesActionTypes.AssignIncomeFailure),
            map((action: AssignIncomeFailureAction) => action.payload.error)
        ).subscribe(error => {
            console.error(error)
            this.isBusy = false;
        })
        this.actions$.pipe(
            ofType(EnvelopesActionTypes.AssignIncomeSuccess)
        ).subscribe(() => {
            this.isBusy = false;
        })
    }

    submit() {
        let request = new AssignIncomeRequest(this.assignments);

        this.store.dispatch(new AssignIncomeRequestAction({ budgetId: this.budgetId, request }));
        this.isBusy = true;
    }

    updateAssignment(model: AssignIncome): void {
        const existing = this.assignments.find(a => a.envelope.id === model.envelope.id);

        if (!existing) {
            this.assignments.push(model)
        } else {
            existing.amount = model.amount;
        }

        let total = 0;
        this.assignments.forEach(assignment => {
            total = total + assignment.amount
        });
        this.assignedIncome = total;
    }
}
