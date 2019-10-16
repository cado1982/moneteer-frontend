import { Spectator, createTestComponentFactory } from '@ngneat/spectator/jest';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnvelopeDetailsBodyActionsComponent } from '../envelope-details-body-actions/envelope-details-body-actions.component';
import { provideMockStore } from '@ngrx/store/testing';


describe('EnvelopeDetailsBodyActionsComponent', () => {
    let spectator: Spectator<EnvelopeDetailsBodyActionsComponent>;
    const createComponent = createTestComponentFactory({
        component: EnvelopeDetailsBodyActionsComponent,
        providers: [
            NgbModal,
            provideMockStore({initialState: {}})
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});


