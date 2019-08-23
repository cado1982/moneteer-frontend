import { Spectator, createTestComponentFactory } from '@netbasal/spectator/jest';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnvelopeDetailsBodyRecentTransactionsComponent } from './envelope-details-body-recent-transactions.component';
import { EnvelopesSelectionService } from '../../services/envelopes-selection.service';
import { provideMockStore } from '@ngrx/store/testing';
import { MockPipe } from 'ng-mocks';
import { BudgetCurrencyPipe } from 'src/app/shared/pipes/budget.currency.pipe';


describe('EnvelopeDetailsBodyRecentTransactionsComponent', () => {
    let spectator: Spectator<EnvelopeDetailsBodyRecentTransactionsComponent>;
    const createComponent = createTestComponentFactory({
        component: EnvelopeDetailsBodyRecentTransactionsComponent,
        declarations: [
            MockPipe(BudgetCurrencyPipe)
        ],
        providers: [
            NgbModal,
            EnvelopesSelectionService,
            provideMockStore({initialState: {}})
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});



