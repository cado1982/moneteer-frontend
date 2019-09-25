import { Component, OnInit } from '@angular/core';
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
    public trialExpiry: moment.Moment | null = null;

    public get LandingUrl(): string {
        return environment.landing_url;
    }

    constructor(public subscriptionStatusService: SubscriptionStatusService) {

    }

    ngOnInit() {
        this.trialExpiry = this.subscriptionStatusService.getTrialExpiry();
    }
}
