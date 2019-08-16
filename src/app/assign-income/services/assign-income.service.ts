import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IEnvelopesState, getAvailableIncome, getEnvelopes } from 'src/app/core/reducers/envelopes.reducer';
import { EnvelopeModel } from 'src/app/core/models';
import { AssignIncomeRequestAction, EnvelopesActionTypes, AssignIncomeFailureAction } from 'src/app/core/actions/envelopes.actions';
import { AssignIncomeRequest, AssignIncome } from 'src/app/core/models/assign.income.request';
import { Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { Subject, Observable, combineLatest } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AssignIncomeService {
    public assignedIncome$ = new Subject<number>();
    public availableIncome$ = new Observable<number>();

    public assignments$ = new Subject<AssignIncome>();
    public leftToAssign$: Observable<number>;
    public percentageAssigned$: Observable<number>;
    public canSubmit$: Observable<boolean>;
    
    public envelopes$: Observable<EnvelopeModel[]>;
    public assignments: AssignIncome[] = [];
    public isBusy: boolean = false;

    constructor(private store: Store<IEnvelopesState>, private actions$: Actions, private router: Router) {
        this.availableIncome$ = this.store.select(getAvailableIncome);
        this.percentageAssigned$ = combineLatest(this.availableIncome$, this.assignedIncome$).pipe(
            map(([availableIncome, assignedIncome]) => availableIncome === 0 ? 0 : (assignedIncome / availableIncome) * 100)
        )

        this.leftToAssign$ = combineLatest(this.availableIncome$, this.assignedIncome$).pipe(
            map(([availableIncome, assignedIncome]) => availableIncome - assignedIncome)
        )

        this.canSubmit$ = this.leftToAssign$.pipe(
            map((leftToAssign) => leftToAssign >= 0)
        )

        this.assignments$.subscribe(model => {
            const existing = this.assignments.find(a => a.envelope.id === model.envelope.id);

            if (!existing) {
                this.assignments.push(model)
            } else {
                existing.amount = model.amount;
            }
    
            let total = 0;
            this.assignments.forEach(assignment => {
                if (assignment.amount !== undefined) {
                    total = total + assignment.amount;
                }
            });
            this.assignedIncome$.next(total);
        });

        this.envelopes$ = this.store.select(getEnvelopes)

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
            this.router.navigate(['../', 'envelopes']);
        })
    }

    submit(budgetId: string) {
        let request = new AssignIncomeRequest(this.assignments);

        this.store.dispatch(new AssignIncomeRequestAction({ budgetId: budgetId, request }));
        this.isBusy = true;
    }



}
