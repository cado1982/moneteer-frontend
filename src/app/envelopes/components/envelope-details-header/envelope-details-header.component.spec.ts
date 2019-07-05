import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeDetailsHeaderComponent } from './envelope-details-header.component';

describe('EnvelopeDetailsHeaderComponent', () => {
  let component: EnvelopeDetailsHeaderComponent;
  let fixture: ComponentFixture<EnvelopeDetailsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopeDetailsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopeDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
