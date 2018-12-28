import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../core/services/index";
import { User } from "oidc-client";
import { Router } from "@angular/router";

@Component({
  selector: "moneteer-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
    public user: User | undefined;

    constructor(private authService: AuthService, private router: Router) {

    }

    ngOnInit(): void {
        this.user = this.authService.getUser();
    }

    public logOut(): void {
        this.authService.logout();
    }

    public switchBudget(): void {
        this.router.navigateByUrl("/budget");
    }

}
