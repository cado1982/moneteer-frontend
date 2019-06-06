
import { Component } from "@angular/core";
import { NavigationStart, Router, NavigationEnd } from "@angular/router";

@Component({
    selector: "moneteer-budget-home",
    templateUrl: "./budget.home.component.html",
    styleUrls: ["./budget.home.component.scss"],
    host: {"class": "main-container"}
})
export class BudgetHomeComponent {

    public isNavigating: boolean;

    constructor(router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.isNavigating = true;
            } else if (event instanceof NavigationEnd) {
                this.isNavigating = false;
            }
        });
    }

}
