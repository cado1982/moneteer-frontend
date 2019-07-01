import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IEnvelopesState, getAvailable, getEnvelopes } from 'src/app/core/reducers/envelopes.reducer';
import { EnvelopeModel } from 'src/app/core/models';

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
    public assignments: {assigned: number, envelope: EnvelopeModel}[] = [];

    constructor(private store: Store<IEnvelopesState>) {
        this.store.select(getAvailable).subscribe(a => this.availableIncome = a);
        this.store.select(getEnvelopes).subscribe(e => this.envelopes = e);
    }

    submit() {
        console.log("done");   
    }

    updateAssignment(assigned: number, envelope: EnvelopeModel): void {
        const existing = this.assignments.find(a => a.envelope.id === envelope.id);

        if (!existing) {
            this.assignments.push({assigned: assigned, envelope: envelope})
        } else {
            existing.assigned = assigned;
        }

        let total = 0;
        this.assignments.forEach(assignment => {
            total = total + assignment.assigned
        });
        this.assignedIncome = total;
    }
}
