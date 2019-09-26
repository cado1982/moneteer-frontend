import { SubscriptionStatusService } from './subscription-status.service';
import { AuthService } from '../auth.service';
import { SpectatorService, createServiceFactory } from '@ngneat/spectator/jest';
import { User, UserSettings } from 'oidc-client';
import moment = require('moment');

describe('SubscriptionStatusService', () => {
    let spectator: SpectatorService<SubscriptionStatusService>;
    const createService = createServiceFactory({
        service: SubscriptionStatusService,
        mocks: [AuthService]
    });
    const mockedNow = 1569502186; // This is just a random unix timestamp representing "now" in the tests
    const oneDay = 60 * 60 * 24;

    beforeEach(() => {
        spectator = createService();
        moment.now = () => mockedNow * 1000;

    });

    it('when user is null', () => {
        const authService = spectator.get(AuthService);
        authService.getUser.andReturn(undefined);

        const trialExpiry = spectator.service.getTrialExpiryDays();

        expect(trialExpiry).toBeNull();
    });

    it('when subscription expiry is present', () => {
        configureUser({trial_expiry: mockedNow + oneDay, subscription_expiry: mockedNow + oneDay});

        const trialExpiry = spectator.service.getTrialExpiryDays();

        expect(trialExpiry).toBeNull();
    });

    it('when trial expires in 1 day', () => {
        configureUser({trial_expiry: mockedNow + oneDay});
        
        const trialExpiry = spectator.service.getTrialExpiryDays();

        expect(trialExpiry).toBe(1);
    });

    it('when trial expires in 1 second', () => {
        configureUser({trial_expiry: mockedNow + 1});
        
        const trialExpiry = spectator.service.getTrialExpiryDays();

        expect(trialExpiry).toBe(0);
    });

    it('when trial is expired', () => {
       configureUser({trial_expiry: mockedNow - 1});

        const trialExpiry = spectator.service.getTrialExpiryDays();

        expect(trialExpiry).toBeNull();
    });

    // Helper function to set profile on AuthService
    const configureUser = (profile: any): void => {
        const authService = spectator.get(AuthService);
        let userSettings: UserSettings = {
            access_token: '',
            expires_at: 0,
            id_token: "",
            profile: profile,
            refresh_token: "",
            scope: "",
            session_state: "",
            state: "",
            token_type: ""
        };
        const user = new User(userSettings);
        authService.getUser.andReturn(user);
    }
});