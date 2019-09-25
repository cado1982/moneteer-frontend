import { EnvelopeListEnvelopeComponent } from './envelope-list-envelope.component';
import { CurrencyInputDirective } from 'src/app/shared/directives/currency-input.directive';
import { AssignIncomeService } from '../../services/assign-income.service';
import { Spectator, createTestComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { MockDirective, MockPipe } from 'ng-mocks';
import { BudgetCurrencyPipe } from 'src/app/shared/pipes/budget.currency.pipe';

describe('EnvelopeListEnvelopeComponent', () => {
    let spectator: Spectator<EnvelopeListEnvelopeComponent>;
    let createComponent = createTestComponentFactory({
        component: EnvelopeListEnvelopeComponent,
        providers: [
            mockProvider(AssignIncomeService)
        ],
        declarations: [
            MockDirective(CurrencyInputDirective),
            MockPipe(BudgetCurrencyPipe)
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
