import { TransactionEditComponent } from './transaction-edit.component';
import { Spectator, createTestComponentFactory } from '@ngneat/spectator/jest';
import { provideMockStore } from '@ngrx/store/testing';
import { MockComponent, MockDirective, MockPipe } from 'ng-mocks';
import { AccountSelectDropdownComponent } from '../account-select-dropdown/account.select.dropdown.component';
import { EnvelopeSelectDropdownComponent } from 'src/app/shared/components/envelope-select-dropdown/envelope.select.dropdown.component';
import { TransactionAssignmentComponent } from '../transaction-assignment/transaction.assignment.component';
import { BudgetCurrencyPipe } from 'src/app/shared/pipes/budget.currency.pipe';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskDirective } from 'ngx-currency';

describe('TransactionEditComponent', () => {
    let spectator: Spectator<TransactionEditComponent>;
    const createComponent = createTestComponentFactory({
        imports: [FormsModule],
        component: TransactionEditComponent,
        declarations: [
            MockComponent(AccountSelectDropdownComponent),
            MockComponent(EnvelopeSelectDropdownComponent),
            MockComponent(TransactionAssignmentComponent),
            MockDirective(CurrencyMaskDirective),
            MockPipe(BudgetCurrencyPipe)
        ],
        providers: [
            provideMockStore({initialState: {}})
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
