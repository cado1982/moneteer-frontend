import { TestBed } from '@angular/core/testing';

import { EnvelopesDataService } from './envelopes-data.service';
import { Store } from '@ngrx/store';
import { IEnvelopesState } from 'src/app/core/reducers/envelopes.reducer';

describe('EnvelopesDataService', () => {
    let storeSpy: jasmine.SpyObj<Store<IEnvelopesState>>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj("Store", ["select"])

        TestBed.configureTestingModule({
            providers: [
                EnvelopesDataService, 
                { provide: Store, useValue: storeSpy }
            ]
        });

        storeSpy = TestBed.get(Store);
    });

    it('should be created', () => {
        const service: EnvelopesDataService = TestBed.get(EnvelopesDataService);
        expect(service).toBeTruthy();
    });
});
