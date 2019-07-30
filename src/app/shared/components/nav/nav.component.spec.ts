import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NavComponent } from "./nav.component";
import { AuthService } from "../../../core/services";
import { User } from "oidc-client";
import { Router } from "@angular/router";
import { DropdownComponent } from "../dropdown-component/dropdown.component";

describe("NavComponent", () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let authService: AuthService;
  let router: Router;
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent, DropdownComponent ],
      providers: [
        { 
          provide: AuthService,
          useValue: {
            getUser: jest.fn(() => exampleUser),
            logout: jest.fn()
          } 
        },
        {
          provide: Router,
          useValue: {
            navigateByUrl: jest.fn()
          }
        }
      ]
    });

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);
    router = TestBed.get(Router);
  });

  test("should create", () => {
    expect(component).toBeTruthy();
  });

  test("should get user", () => {
    jest.spyOn(authService, "getUser");
    
    component.ngOnInit();
    
    expect(component.user).toEqual(exampleUser);
  });

  test("should logout", () => {
    const spy = jest.spyOn(authService, 'logout');
    
    component.logOut();

    expect(spy).toHaveBeenCalled();
  });

  test("should allow switching budgets", () => {
    const spy = jest.spyOn(router, 'navigateByUrl');

    component.switchBudget();

    expect(spy).toHaveBeenCalledWith("/budget");
  });
});
