import { EnvelopeListEnvelopeComponent } from './envelope-list-envelope.component';
import { AssignIncomeService } from '../../services/assign-income.service';
import { Spectator, createTestComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { MockDirective, MockPipe } from 'ng-mocks';
import { BudgetCurrencyPipe } from 'src/app/shared/pipes/budget.currency.pipe';
import { CurrencyMaskDirective } from 'ngx-currency';
import { FormsModule } from '@angular/forms';

describe('EnvelopeListEnvelopeComponent', () => {
    let spectator: Spectator<EnvelopeListEnvelopeComponent>;
    let createComponent = createTestComponentFactory({
        imports: [FormsModule],
        component: EnvelopeListEnvelopeComponent,
        providers: [
            mockProvider(AssignIncomeService)
        ],
        declarations: [
            MockDirective(CurrencyMaskDirective),
            MockPipe(BudgetCurrencyPipe)
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
