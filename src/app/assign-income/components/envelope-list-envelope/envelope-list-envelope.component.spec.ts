import { EnvelopeListEnvelopeComponent } from './envelope-list-envelope.component';
import { CurrencyInputDirective } from 'src/app/shared/directives/currency-input.directive';
import { MockBudgetCurrencyPipe } from 'src/app/testing/budget-currency-pipe.mock';
import { AssignIncomeService } from '../../services/assign-income.service';
import { Spectator } from '@netbasal/spectator/jest/internals';
import { createTestComponentFactory } from '@netbasal/spectator/jest/spectator';

describe('EnvelopeListEnvelopeComponent', () => {
    let spectator: Spectator<EnvelopeListEnvelopeComponent>;
    let createComponent = createTestComponentFactory({
        component: EnvelopeListEnvelopeComponent,
        providers: [
            AssignIncomeService
        ],
        declarations: [CurrencyInputDirective, MockBudgetCurrencyPipe]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
