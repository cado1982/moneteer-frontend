import { Injectable } from "@angular/core";
import { AuthService } from "../auth.service";
import * as moment from "moment";

@Injectable()
export class SubscriptionStatusService {

    constructor(private authService: AuthService) {
    }

    public getTrialExpiry(): moment.Moment | null {
        const user = this.authService.getUser();

        if (user && !user.profile.subscription_expiry) {
            const trialExpiry = moment.utc(user.profile.trial_expiry, "DD/MM/YYYY HH:mm:ss");
            
            if (trialExpiry > moment.utc()) {
                return trialExpiry.local();
            }
        }
        
        return null;
    }
}
