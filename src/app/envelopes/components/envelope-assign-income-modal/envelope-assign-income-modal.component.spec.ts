import { Spectator, createTestComponentFactory } from '@ngneat/spectator/jest';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { provideMockActions } from '@ngrx/effects/testing';
import { empty } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockComponent, MockDirective, MockPipe } from 'ng-mocks';
import { ErrorAlertComponent } from 'src/app/shared/components/error-alert/error-alert.component';
import { CurrencyMaskDirective } from 'ngx-currency';
import { EnvelopeAssignIncomeModalComponent } from './envelope-assign-income-modal.component';
import { BudgetCurrencyPipe } from 'src/app/shared/pipes/budget.currency.pipe';

describe('EnvelopeAssignIncomeModalComponent', () => {
    let spectator: Spectator<EnvelopeAssignIncomeModalComponent>;
    const createComponent = createTestComponentFactory({
        component: EnvelopeAssignIncomeModalComponent,
        providers: [
            NgbActiveModal,
            provideMockActions(() => empty()),
            provideMockStore({ initialState: {}})
        ],
        imports: [
            FormsModule,
            ReactiveFormsModule
        ],
        declarations: [
            MockComponent(ErrorAlertComponent),
            MockDirective(CurrencyMaskDirective),
            MockPipe(BudgetCurrencyPipe)
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
