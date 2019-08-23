import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeSetBalanceZeroModalComponent } from './envelope-set-balance-zero-modal.component';
import { ErrorAlertComponent } from 'src/app/shared/components/error-alert/error-alert.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('EnvelopeSetBalanceZeroModalComponent', () => {
  let component: EnvelopeSetBalanceZeroModalComponent;
  let fixture: ComponentFixture<EnvelopeSetBalanceZeroModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopeSetBalanceZeroModalComponent, ErrorAlertComponent],
      providers: [NgbActiveModal]
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
