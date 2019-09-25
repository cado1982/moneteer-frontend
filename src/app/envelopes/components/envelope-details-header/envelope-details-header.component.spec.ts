import { Spectator, createTestComponentFactory } from '@ngneat/spectator/jest';

import { EnvelopeDetailsHeaderComponent } from './envelope-details-header.component';
import { MockPipe } from 'ng-mocks';
import { BudgetCurrencyPipe } from 'src/app/shared/pipes/budget.currency.pipe';


describe('EnvelopeDetailsHeaderComponent', () => {
    let spectator: Spectator<EnvelopeDetailsHeaderComponent>;
    const createComponent = createTestComponentFactory({
        component: EnvelopeDetailsHeaderComponent,
        declarations: [
            MockPipe(BudgetCurrencyPipe)
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});




