import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from "@angular/router";

import { AuthService, NotificationsService } from "../../core/services/index";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private notificationsService: NotificationsService) { }

    public canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this._canActivate(state.url);
    }

    public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this._canActivate(state.url);
    }

    private _canActivate(targetUrl: string): boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.authService.startAuthentication(targetUrl);
            return false;
        }
    }
}
