import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/index";

@Component({
  selector: "moneteer-auth-callback",
  templateUrl: "./auth-callback.component.html",
  styleUrls: ["./auth-callback.component.scss"]
})
export class AuthCallbackComponent implements OnInit {

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        this.authService.handleCallback();
    }
}