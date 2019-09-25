import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { NavTrialStatusComponent } from './nav-trial-status.component';
import { SubscriptionStatusService } from 'src/app/core/services/subscription-status/subscription-status.service';

describe('NavTrialStatusComponent', () => {
    let spectator: Spectator<NavTrialStatusComponent>;
    const createComponent = createComponentFactory({
        component: NavTrialStatusComponent,
        mocks: [SubscriptionStatusService]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    }); 
});