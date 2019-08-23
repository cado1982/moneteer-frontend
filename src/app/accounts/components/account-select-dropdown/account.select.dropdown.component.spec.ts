import { Spectator, createTestComponentFactory } from '@netbasal/spectator/jest';
import { MockComponent, MockPipe } from 'ng-mocks';
import { DropdownListComponent } from 'src/app/shared/components/dropdown-list/dropdown-list.component';
import { AccountSelectDropdownComponent } from './account.select.dropdown.component';
import { BudgetCurrencyPipe } from 'src/app/shared/pipes/budget.currency.pipe';

describe('AccountSelectDropdownComponent', () => {
    let spectator: Spectator<AccountSelectDropdownComponent>;
    const createComponent = createTestComponentFactory({
        component: AccountSelectDropdownComponent,
        declarations: [
            MockComponent(DropdownListComponent),
            MockPipe(BudgetCurrencyPipe)
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
