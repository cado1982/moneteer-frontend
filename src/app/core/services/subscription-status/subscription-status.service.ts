import { Injectable } from "@angular/core";
import { AuthService } from "../auth.service";
import * as moment from "moment";

@Injectable()
export class SubscriptionStatusService {

    constructor(private authService: AuthService) {
    }

    public getTrialExpiryDays(): number | null {
        const user = this.authService.getUser();

        if (user && !user.profile.subscription_expiry) {
            const trialExpiry = moment.unix(user.profile.trial_expiry).utc();
            const now = moment.utc();
            
            if (trialExpiry > now) {
                return trialExpiry.diff(now, 'days');
            }
        }
        
        return null;
    }
}
