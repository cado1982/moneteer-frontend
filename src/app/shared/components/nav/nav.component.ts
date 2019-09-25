import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../core/services/index";
import { User } from "oidc-client";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { SubscriptionStatusService } from "src/app/core/services/subscription-status/subscription-status.service";

@Component({
  selector: "moneteer-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
    public user: User | undefined;
    public trialExpiryDays: number | null;

    constructor(
        private authService: AuthService, private router: Router, private subscriptionStatusService: SubscriptionStatusService) {

    }

    ngOnInit(): void {
        this.user = this.authService.getUser();
        this.trialExpiryDays = this.subscriptionStatusService.getTrialExpiryDays();
    }

    public logOut(): void {
        this.authService.logout();
    }

    public get landingUrl(): string {
        return environment.landing_url;
    }

    public switchBudget(): void {
        this.router.navigateByUrl("/budget");
    }

}
