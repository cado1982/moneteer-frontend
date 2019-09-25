import { SubscriptionStatusService } from './subscription-status.service';
import { AuthService } from '../auth.service';
import { SpectatorService, createServiceFactory, mockProvider } from '@ngneat/spectator/jest';
import { User, UserSettings } from 'oidc-client';
import moment = require('moment');

describe('SubscriptionStatusService', () => {
    let spectator: SpectatorService<SubscriptionStatusService>;
    const createService = createServiceFactory({
        service: SubscriptionStatusService,
        mocks: [AuthService]
    });

    beforeEach(() => {
        spectator = createService();
        moment.now = () => {
            return +new Date("2019/09/10 00:00:00");
        }
    });

    it('when user is null should return null trial expiry', () => {
        const authService = spectator.get(AuthService);
        authService.getUser.andReturn(undefined);

        const trialExpiry = spectator.service.getTrialExpiry();

        expect(trialExpiry).toBeNull();
    }); 

    it('when subscription expiry is present then should return null trial expiry', () => {
        const authService = spectator.get(AuthService);

        const userSettings: UserSettings = {
            access_token: '',
            expires_at: 0,
            id_token: "",
            profile: {
                trial_expiry: "08/09/2019 00:00:00",
                subscription_expiry: "08/09/2019 10:00:00"
            },
            refresh_token: "",
            scope: "",
            session_state: "",
            state: "",
            token_type: ""
        };
        const exampleUser = new User(userSettings);

        authService.getUser.andReturn(exampleUser);

        const trialExpiry = spectator.service.getTrialExpiry();

        expect(trialExpiry).toBeNull();
    });

    it('when subscription expiry is null and trial is in date should return trial expiry', () => {
        const authService = spectator.get(AuthService);

        const userSettings: UserSettings = {
            access_token: '',
            expires_at: 0,
            id_token: "",
            profile: {
                trial_expiry: "11/09/2019 00:00:00"
            },
            refresh_token: "",
            scope: "",
            session_state: "",
            state: "",
            token_type: ""
        };
        const exampleUser = new User(userSettings);

        authService.getUser.andReturn(exampleUser);

        const trialExpiry = spectator.service.getTrialExpiry();

        expect(trialExpiry).toBeTruthy();
    });

    it('when subscription expiry is null and trial is expired then should return null', () => {
        const authService = spectator.get(AuthService);

        const userSettings: UserSettings = {
            access_token: '',
            expires_at: 0,
            id_token: "",
            profile: {
                trial_expiry: "09/09/2019 00:00:00"
            },
            refresh_token: "",
            scope: "",
            session_state: "",
            state: "",
            token_type: ""
        };
        const exampleUser = new User(userSettings);

        authService.getUser.andReturn(exampleUser);

        const trialExpiry = spectator.service.getTrialExpiry();

        expect(trialExpiry).toBeNull();
    });
});