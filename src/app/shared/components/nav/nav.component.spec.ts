import { NavComponent } from "./nav.component";
import { AuthService } from "../../../core/services";
import { User } from "oidc-client";
import { Spectator, createComponentFactory, mockProvider } from "@ngneat/spectator/jest";
import { MockComponent } from "ng-mocks";
import { NavTrialStatusComponent } from "../nav-trial-status/nav-trial-status.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("NavComponent", () => {
    let spectator: Spectator<NavComponent>;
    const createComponent = createComponentFactory({
        component: NavComponent,
        imports: [
            RouterTestingModule
        ],
        declarations: [
            MockComponent(NavTrialStatusComponent)
        ],
        providers: [
            mockProvider(AuthService, {
                getUser: () => exampleUser
            })
        ]
    })

    const exampleUser: User = {
        id_token: "",
        access_token: "",
        refresh_token: "",
        expired: false,
        expires_at: 0,
        profile: {
            email: ""
        },
        state: null,
        scope: "",
        token_type: "",
        session_state: "",
        toStorageString: jest.fn(),
        expires_in: 0,
        scopes: []
    };

    beforeEach(() => spectator = createComponent())

    test("should create", () => {
        expect(spectator.component).toBeTruthy();
    });

    test("should get user", () => {
        spectator.component.ngOnInit();

        expect(spectator.component.user).toEqual(exampleUser);
    });

    test("should logout", () => {
        const authService = spectator.get(AuthService);

        spectator.component.logOut();

        expect(authService.logout).toHaveBeenCalledTimes(1);
    });
});
