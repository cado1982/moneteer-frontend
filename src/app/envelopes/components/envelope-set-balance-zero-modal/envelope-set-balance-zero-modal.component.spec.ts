import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeSetBalanceZeroModalComponent } from './envelope-set-balance-zero-modal.component';

describe('EnvelopeSetBalanceZeroModalComponent', () => {
  let component: EnvelopeSetBalanceZeroModalComponent;
  let fixture: ComponentFixture<EnvelopeSetBalanceZeroModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopeSetBalanceZeroModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopeSetBalanceZeroModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
