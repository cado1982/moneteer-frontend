import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeDetailsBodyRecentTransactionsComponent } from './envelope-details-body-recent-transactions.component';
import { MockBudgetCurrencyPipe } from 'src/app/testing/budget-currency-pipe.mock';
import { provideMockStore } from '@ngrx/store/testing';
import { EnvelopesSelectionService } from '../../services/envelopes-selection.service';

describe('EnvelopeDetailsBodyRecentTransactionsComponent', () => {
    let component: EnvelopeDetailsBodyRecentTransactionsComponent;
    let fixture: ComponentFixture<EnvelopeDetailsBodyRecentTransactionsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EnvelopeDetailsBodyRecentTransactionsComponent, MockBudgetCurrencyPipe],
            providers: [
                provideMockStore({initialState: {}}),
                EnvelopesSelectionService
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EnvelopeDetailsBodyRecentTransactionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
