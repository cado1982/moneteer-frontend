import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IEnvelopesState, getAvailableIncomeEnvelope, getVisibleEnvelopes } from 'src/app/core/reducers/envelopes.reducer';
import { EnvelopeModel, EnvelopeBalanceTarget } from 'src/app/core/models';
import { EnvelopesActionTypes, MoveBalanceFailureAction, MoveBalanceRequestAction } from 'src/app/core/actions/envelopes.actions';
import { Actions, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { Subject, Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AssignIncomeService {
    public assignedIncome$ = new BehaviorSubject<number>(0);
    public assignments$ = new Subject<EnvelopeBalanceTarget>();
    public leftToAssign$: Observable<number>;
    public percentageAssigned$: Observable<number>;
    public canSubmit$: Observable<boolean>;
    
    public envelopes$: Observable<EnvelopeModel[]>;
    public availableIncomeEnvelope$ = new BehaviorSubject<EnvelopeModel | null>(null);
    public assignments: EnvelopeBalanceTarget[] = [];
    public isBusy: boolean = false;

    constructor(private store: Store<IEnvelopesState>, private actions$: Actions, private router: Router) {
        this.store.select(getAvailableIncomeEnvelope).subscribe(e => this.availableIncomeEnvelope$.next(e));

        this.leftToAssign$ = combineLatest(this.assignedIncome$, this.store.select(getAvailableIncomeEnvelope)).pipe(
            map(([assignedIncome, availableIncomeEnvelope]) => availableIncomeEnvelope.balance - assignedIncome)
        )

        this.canSubmit$ = this.leftToAssign$.pipe(
            map((leftToAssign) => leftToAssign >= 0 && !this.isBusy)
        )

        this.assignments$.subscribe(model => {
            const existing = this.assignments.find(a => a.envelopeId === model.envelopeId);

            if (!existing) {
                if (model.amount > 0) {
                    this.assignments.push(model);
                }
            } else if (model.amount <= 0) {
                this.assignments.splice(this.assignments.indexOf(existing), 1);
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

        this.envelopes$ = this.store.select(getVisibleEnvelopes)

        this.actions$.pipe(
            ofType(EnvelopesActionTypes.MoveBalanceFailure),
            map((action: MoveBalanceFailureAction) => action.payload.error)
        ).subscribe(error => {
            console.error(error)
            this.isBusy = false;
        })
        this.actions$.pipe(
            ofType(EnvelopesActionTypes.MoveBalanceSuccess)
        ).subscribe(() => {
            this.isBusy = false;
            this.router.navigate(['../', 'envelopes']);
        })
    }

    submit() {
        const availableIncomeEnvelope = this.availableIncomeEnvelope$.value;

        if (!availableIncomeEnvelope) return;

        this.store.dispatch(new MoveBalanceRequestAction({ fromEnvelopeId: availableIncomeEnvelope.id, targets: this.assignments }));
        this.isBusy = true;
    }
}
