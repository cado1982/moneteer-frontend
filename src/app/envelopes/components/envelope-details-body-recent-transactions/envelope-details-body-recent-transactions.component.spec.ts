import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeDetailsBodyRecentTransactionsComponent } from './envelope-details-body-recent-transactions.component';

describe('EnvelopeDetailsBodyRecentTransactionsComponent', () => {
  let component: EnvelopeDetailsBodyRecentTransactionsComponent;
  let fixture: ComponentFixture<EnvelopeDetailsBodyRecentTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopeDetailsBodyRecentTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopeDetailsBodyRecentTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
