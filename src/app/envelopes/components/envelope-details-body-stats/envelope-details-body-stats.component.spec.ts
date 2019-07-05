import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeDetailsBodyStatsComponent } from './envelope-details-body-stats.component';

describe('EnvelopeDetailsBodyStatsComponent', () => {
  let component: EnvelopeDetailsBodyStatsComponent;
  let fixture: ComponentFixture<EnvelopeDetailsBodyStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopeDetailsBodyStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopeDetailsBodyStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
