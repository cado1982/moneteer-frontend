import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AuthCallbackComponent } from "./auth-callback.component";
import { AuthService } from "../../services";

describe("AuthCallbackComponent", () => {
  let component: AuthCallbackComponent;
  let fixture: ComponentFixture<AuthCallbackComponent>;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthCallbackComponent ],
      providers: [ 
        { 
          provide: AuthService,
          useValue: {
            handleCallback: jest.fn()
          } 
        }  
      ]
    });

    fixture = TestBed.createComponent(AuthCallbackComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should handle callback", () => {
    const spy = jest.spyOn(authService, 'handleCallback');

    component.ngOnInit();
    
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
