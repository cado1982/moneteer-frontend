import { TestBed } from '@angular/core/testing';
import { EnvelopesDataService } from './envelopes-data.service';
import { Store, StoreModule } from '@ngrx/store';
import { IEnvelopesState } from 'src/app/core/reducers/envelopes.reducer';

describe('Service: EnvelopesDataService', async () => {
    let service: EnvelopesDataService;
    let _store: any;
    let spy: any;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [EnvelopesDataService, Store]
        });

        service = TestBed.get(EnvelopesDataService);
        _store = TestBed.get(Store);
    });

    it('should be created', () => {
        const service: EnvelopesDataService = TestBed.get(EnvelopesDataService);
        expect(service).toBeTruthy();
    });
});
