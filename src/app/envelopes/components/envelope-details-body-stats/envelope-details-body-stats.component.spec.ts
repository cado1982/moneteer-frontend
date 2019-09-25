import { Spectator, createTestComponentFactory } from '@ngneat/spectator/jest';

import { EnvelopesSelectionService } from '../../services/envelopes-selection.service';
import { EnvelopeDetailsBodyStatsComponent } from './envelope-details-body-stats.component';
import { MockPipe } from 'ng-mocks';
import { BudgetCurrencyPipe } from 'src/app/shared/pipes/budget.currency.pipe';

describe('EnvelopeDetailsBodyStatsComponent', () => {
    let spectator: Spectator<EnvelopeDetailsBodyStatsComponent>;
    const createComponent = createTestComponentFactory({
        component: EnvelopeDetailsBodyStatsComponent,
        providers: [
            EnvelopesSelectionService
        ],
        declarations: [
            MockPipe(BudgetCurrencyPipe)
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});




