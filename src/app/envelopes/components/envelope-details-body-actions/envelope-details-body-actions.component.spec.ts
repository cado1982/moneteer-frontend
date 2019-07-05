import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeDetailsBodyActionsComponent } from './envelope-details-body-actions.component';

describe('EnvelopeDetailsBodyActionsComponent', () => {
  let component: EnvelopeDetailsBodyActionsComponent;
  let fixture: ComponentFixture<EnvelopeDetailsBodyActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopeDetailsBodyActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopeDetailsBodyActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
