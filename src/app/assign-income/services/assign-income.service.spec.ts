import { TestBed } from '@angular/core/testing';

import { AssignIncomeService } from './assign-income.service';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Router } from '@angular/router';
import { IEnvelopesState } from 'src/app/core/reducers/envelopes.reducer';

describe('AssignIncomeService', () => {
    beforeEach(() => {
        const storeSpy = jasmine.createSpyObj<Store<IEnvelopesState>>('Store', ['select']);
        const actionsSpy = jasmine.createSpyObj<Actions>('Actions', []);
        const routerSpy = jasmine.createSpyObj<Router>('Router', []);
    
        TestBed.configureTestingModule({
            providers: [
                AssignIncomeService,
                { provide: Store, useClass: storeSpy },
                { provide: Actions, useClass: actionsSpy },
                { provide: Router, useClass: routerSpy }
            ]
        });
    });
    

    it('should be created', () => {
        const service: AssignIncomeService = TestBed.get(AssignIncomeService);
        expect(service).toBeTruthy();
    });
});
