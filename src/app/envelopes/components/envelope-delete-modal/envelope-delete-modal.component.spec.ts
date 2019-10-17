import { Spectator, createTestComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent, MockPipe } from 'ng-mocks';

import { provideMockStore } from '@ngrx/store/testing';
import { empty } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { ErrorAlertComponent } from 'src/app/shared/components/error-alert/error-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EnvelopeDeleteModalComponent } from './envelope-delete-modal.component';
import { BudgetCurrencyPipe } from 'src/app/shared/pipes/budget.currency.pipe';

describe('EnvelopeDeleteModalComponent', () => {
    let spectator: Spectator<EnvelopeDeleteModalComponent>;
    const createComponent = createTestComponentFactory({
        imports: [ReactiveFormsModule, FormsModule],
        component: EnvelopeDeleteModalComponent,
        declarations: [
            MockComponent(ErrorAlertComponent),
            MockPipe(BudgetCurrencyPipe)
        ],
        providers: [
            provideMockStore({initialState: {}}),
            provideMockActions(() => empty()),
            NgbActiveModal
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});

