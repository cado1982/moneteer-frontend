import { HeaderComponent } from './header.component';
import { HeaderProgressComponent } from '../header-progress/header-progress.component';
import { AssignIncomeService } from '../../services/assign-income.service';
import { MockComponent, MockPipe } from "ng-mocks";
import { Spectator, createTestComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { BudgetCurrencyPipe } from 'src/app/shared/pipes/budget.currency.pipe';

describe('HeaderComponent', () => {
    let spectator: Spectator<HeaderComponent>;
    let createComponent = createTestComponentFactory({
        component: HeaderComponent,
        providers: [
            mockProvider(AssignIncomeService)
        ],
        declarations: [
            MockComponent(HeaderProgressComponent),
            MockPipe(BudgetCurrencyPipe)
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
