import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeListEnvelopeComponent } from './envelope-list-envelope.component';
import { CurrencyInputDirective } from 'src/app/shared/directives/currency-input.directive';
import { MockBudgetCurrencyPipe } from 'src/app/testing/budget-currency-pipe.mock';
import { AssignIncomeService } from '../../services/assign-income.service';

describe('EnvelopeListEnvelopeComponent', () => {
  let component: EnvelopeListEnvelopeComponent;
  let fixture: ComponentFixture<EnvelopeListEnvelopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopeListEnvelopeComponent, CurrencyInputDirective, MockBudgetCurrencyPipe ],
      providers: [AssignIncomeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopeListEnvelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
