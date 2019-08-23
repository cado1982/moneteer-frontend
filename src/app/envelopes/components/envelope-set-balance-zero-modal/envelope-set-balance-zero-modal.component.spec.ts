
import { Spectator, createTestComponentFactory } from '@netbasal/spectator/jest';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { provideMockActions } from '@ngrx/effects/testing';
import { empty } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnvelopeSetBalanceZeroModalComponent } from './envelope-set-balance-zero-modal.component';
import { MockComponent } from 'ng-mocks';
import { ErrorAlertComponent } from 'src/app/shared/components/error-alert/error-alert.component';


describe('EnvelopeSetBalanceZeroModalComponent', () => {
    let spectator: Spectator<EnvelopeSetBalanceZeroModalComponent>;
    const createComponent = createTestComponentFactory({
        component: EnvelopeSetBalanceZeroModalComponent,
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
            MockComponent(ErrorAlertComponent)
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});





