import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services';
import * as moment from "moment";
import { environment } from 'src/environments/environment';
import { SubscriptionStatusService } from 'src/app/core/services/subscription-status/subscription-status.service';

@Component({
    selector: 'moneteer-nav-trial-status',
    templateUrl: './nav-trial-status.component.html',
    styleUrls: ['./nav-trial-status.component.scss'],
    host: {
        'class': 'border-right'
    }
})
export class NavTrialStatusComponent implements OnInit {
    @Input() public days: number;
    public trialExpiryMessage: string;

    public get LandingUrl(): string {
        return environment.landing_url;
    }

    constructor() {

    }

    ngOnInit() {
        if (this.days === 0) {
            this.trialExpiryMessage = "today";
        } else if (this.days === 1) {
            this.trialExpiryMessage = "tomorrow";
        } else if (this.days > 1) {
            this.trialExpiryMessage = `in ${this.days} days`;
        } else {
            this.trialExpiryMessage = "";
        }
    }
}
