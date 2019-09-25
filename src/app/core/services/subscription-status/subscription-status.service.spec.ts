import { SubscriptionStatusService } from './subscription-status.service';
import { AuthService } from '../auth.service';
import { SpectatorService, createServiceFactory, mockProvider } from '@ngneat/spectator/jest';
import { User } from 'oidc-client';

describe('SubscriptionStatusService', () => {
    let spectator: SpectatorService<SubscriptionStatusService>;
    const createService = createServiceFactory({
        service: SubscriptionStatusService,
        providers: [
            mockProvider(AuthService, {
                getUser: () => undefined
            })
        ]
    });

    beforeEach(() => spectator = createService());

    it('when user is null should return null trial expiry', () => {
        const trialExpiry = spectator.service.getTrialExpiry();

        expect(trialExpiry).toBeNull();
    });
});