import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeDetailsBodyComponent } from './envelope-details-body.component';
import { EnvelopeDetailsBodyStatsComponent } from '../envelope-details-body-stats/envelope-details-body-stats.component';
import { EnvelopeDetailsBodyActionsComponent } from '../envelope-details-body-actions/envelope-details-body-actions.component';
import { EnvelopeDetailsBodyRecentTransactionsComponent } from '../envelope-details-body-recent-transactions/envelope-details-body-recent-transactions.component';
import { MockBudgetCurrencyPipe } from 'src/app/testing/budget-currency-pipe.mock';

describe('EnvelopeDetailsBodyComponent', () => {
    let component: EnvelopeDetailsBodyComponent;
    let fixture: ComponentFixture<EnvelopeDetailsBodyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EnvelopeDetailsBodyComponent,
                EnvelopeDetailsBodyStatsComponent,
                EnvelopeDetailsBodyActionsComponent,
                EnvelopeDetailsBodyRecentTransactionsComponent,
                MockBudgetCurrencyPipe
            ]
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
