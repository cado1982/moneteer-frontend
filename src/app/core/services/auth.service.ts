import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, HttpHeaders } from "@angular/common/http";
import { NotificationsService } from "./notifications.service";
import { UserManager, UserManagerSettings, User } from "oidc-client";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthService {
    private config: UserManagerSettings = {
        authority: environment.auth_url,
        client_id: "moneteer-spa",
        redirect_uri: environment.auth_redirect_url,
        response_type: "id_token token",
        scope: "openid profile email moneteer-api"
    };
    private manager: UserManager = new UserManager(this.config);

    private user: User | undefined = undefined;

    public isAuthenticated(): boolean {
        return this.user !== undefined && !this.user.expired;
    }

    constructor(
        http: HttpClient,
        private router: Router,
        private notificationService: NotificationsService) {
    }

    private getCookie(cname: string): string {
        var name: string = cname + "=";
        var decodedCookie: string = decodeURIComponent(document.cookie);
        var ca: string[] = decodedCookie.split(";");
        for (var i: number = 0; i < ca.length; i++) {
            var c: string = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    public addAuthHeader(request: HttpRequest<any>): HttpRequest<any> {
        const authHeader: string = this.getAuthorizationHeaderValue();

        if (!authHeader) {
            return request;
        }

        let changedRequest: HttpRequest<any> = request;

        const headerSettings: { [name: string]: string | string[]; } = {};

        for (const key of request.headers.keys()) {
            const headers = request.headers.getAll(key)
            if (!!headers) {
                headerSettings[key] = headers;
            }
        }
        
        headerSettings.Authorization = authHeader;
        headerSettings["Content-Type"] = "application/json";
        
        const newHeader: HttpHeaders = new HttpHeaders(headerSettings);

        changedRequest = request.clone({
            headers: newHeader
        });

        return changedRequest;
    }

    public getAuthorizationHeaderValue(): string {
        return this.user === undefined ? "" : "Bearer " + this.user.access_token;
    }

    public startAuthentication(targetUrl: string): void {
        document.cookie = `redirectUrl=${targetUrl}; path=/;`;

        this.manager.signinRedirect().catch(err => {
            this.notificationService.errorModal("We were unable to log you in, sorry. Please try again and contact support if this problem persists.")
        });
    }

    public getUser(): User | undefined {
        return this.user;
    }

    public handleCallback(): void {
        this.manager.signinRedirectCallback().then(user => {
            this.user = user;
            const redirectUrl: string = this.getCookie("redirectUrl");

            if (redirectUrl) {
                this.router.navigateByUrl(redirectUrl);
            } else {
                this.router.navigate(["/"]);
            }
        }).catch(err => {
            this.user = undefined;
            if (err.message === "No matching state found in storage") {
                // User might have refreshed the auth-callback page so send them back to the home page to re-auth
                this.router.navigate(["/"]);
            } else {
                this.notificationService.error("Something went wrong while trying to log you in.");
            }
        });
    }

    public logout(): void {
        this.manager.signoutRedirect();
    }
}