import { TestBed, async } from '@angular/core/testing';

import { AssignIncomeService } from './assign-income.service';
import { Store, Action } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Router } from '@angular/router';
import { IEnvelopesState } from 'src/app/core/reducers/envelopes.reducer';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

describe('AssignIncomeService', () => {
    let store: Store<IEnvelopesState>;
    let actions$: Observable<Action>;
    const initialStoreState: IEnvelopesState = {
        envelopeCategories: [],
        envelopes: []
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [
                AssignIncomeService,
                provideMockStore({ initialState: initialStoreState}),
                provideMockActions(() => actions$)
            ]
        }).compileComponents();
    }));

    beforeEach(() => {

    });
    

    it('should be created', () => {
        const service: AssignIncomeService = TestBed.get(AssignIncomeService);
        expect(service).toBeTruthy();
    });
});
