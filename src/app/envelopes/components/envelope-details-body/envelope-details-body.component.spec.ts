import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeDetailsBodyComponent } from './envelope-details-body.component';

describe('EnvelopeDetailsBodyComponent', () => {
  let component: EnvelopeDetailsBodyComponent;
  let fixture: ComponentFixture<EnvelopeDetailsBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopeDetailsBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopeDetailsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
