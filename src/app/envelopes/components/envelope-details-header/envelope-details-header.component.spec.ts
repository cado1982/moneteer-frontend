import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeDetailsHeaderComponent } from './envelope-details-header.component';
import { BudgetCurrencyPipe } from 'src/app/shared/pipes/budget.currency.pipe';
import { MockBudgetCurrencyPipe } from 'src/app/testing/budget-currency-pipe.mock';

describe('EnvelopeDetailsHeaderComponent', () => {
    let component: EnvelopeDetailsHeaderComponent;
    let fixture: ComponentFixture<EnvelopeDetailsHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EnvelopeDetailsHeaderComponent,
                MockBudgetCurrencyPipe
            ],
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
