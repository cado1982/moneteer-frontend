import { Spectator, createTestComponentFactory } from '@netbasal/spectator/jest';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnvelopeDetailsBodyActionsComponent } from '../envelope-details-body-actions/envelope-details-body-actions.component';


describe('EnvelopeDetailsBodyActionsComponent', () => {
    let spectator: Spectator<EnvelopeDetailsBodyActionsComponent>;
    const createComponent = createTestComponentFactory({
        component: EnvelopeDetailsBodyActionsComponent,
        providers: [NgbModal]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});


