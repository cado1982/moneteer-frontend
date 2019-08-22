import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeDetailsHeaderComponent } from './envelope-details-header.component';
import { BudgetCurrencyPipe } from 'src/app/shared/pipes/budget.currency.pipe';

describe('EnvelopeDetailsHeaderComponent', () => {
    let component: EnvelopeDetailsHeaderComponent;
    let fixture: ComponentFixture<EnvelopeDetailsHeaderComponent>;

    beforeEach(async(() => {
        const pipe = jasmine.createSpyObj<BudgetCurrencyPipe>('BudgetCurrencyPipe', []);

        TestBed.configureTestingModule({
            declarations: [EnvelopeDetailsHeaderComponent],
            providers: [
                { provide: BudgetCurrencyPipe, useClass: pipe }
            ]
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
