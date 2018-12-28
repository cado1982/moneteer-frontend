
import {map} from "rxjs/operators";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationStart, Router, NavigationEnd } from "@angular/router";
import "rxjs/add/operator/switchMap";
import { Observable } from "rxjs";
import { BudgetModel } from "../../../core/models/index";
import { AccountModel } from "../../../accounts/models/index";

@Component({
    selector: "moneteer-budget-home",
    templateUrl: "./budget.home.component.html",
    styleUrls: ["./budget.home.component.scss"],
    host: {"class": "main-container"}
})
export class BudgetHomeComponent {

    public isNavigating: boolean;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.isNavigating = true;
            } else if (event instanceof NavigationEnd) {
                this.isNavigating = false;
            }
        });
    }

}
