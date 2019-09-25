import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTrialStatusComponent } from './nav-trial-status.component';

describe('NavTrialStatusComponent', () => {
  let component: NavTrialStatusComponent;
  let fixture: ComponentFixture<NavTrialStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTrialStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTrialStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
