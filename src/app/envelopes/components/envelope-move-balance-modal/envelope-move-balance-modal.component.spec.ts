import { Spectator, createTestComponentFactory } from '@ngneat/spectator/jest';

import { EnvelopeMoveBalanceModalComponent } from './envelope-move-balance-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { provideMockActions } from '@ngrx/effects/testing';
import { empty } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockComponent, MockDirective } from 'ng-mocks';
import { ErrorAlertComponent } from 'src/app/shared/components/error-alert/error-alert.component';
import { EnvelopeSelectDropdownComponent } from 'src/app/shared/components/envelope-select-dropdown/envelope.select.dropdown.component';
import { CurrencyMaskDirective } from 'ngx-currency';

describe('EnvelopeMoveBalanceModalComponent', () => {
    let spectator: Spectator<EnvelopeMoveBalanceModalComponent>;
    const createComponent = createTestComponentFactory({
        component: EnvelopeMoveBalanceModalComponent,
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
            MockComponent(EnvelopeSelectDropdownComponent),
            MockDirective(CurrencyMaskDirective)
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});





