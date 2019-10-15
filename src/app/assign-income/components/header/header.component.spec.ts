import { HeaderComponent } from './header.component';
import { AssignIncomeService } from '../../services/assign-income.service';
import { MockPipe } from "ng-mocks";
import { Spectator, createTestComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { BudgetCurrencyPipe } from 'src/app/shared/pipes/budget.currency.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
    let spectator: Spectator<HeaderComponent>;
    let createComponent = createTestComponentFactory({
        component: HeaderComponent,
        providers: [
            mockProvider(AssignIncomeService)
        ],
        declarations: [
            MockPipe(BudgetCurrencyPipe)
        ],
        imports: [RouterTestingModule]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
