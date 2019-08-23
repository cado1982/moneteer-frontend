import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeDetailsBodyStatsComponent } from './envelope-details-body-stats.component';
import { MockBudgetCurrencyPipe } from 'src/app/testing/budget-currency-pipe.mock';
import { EnvelopesSelectionService } from '../../services/envelopes-selection.service';

describe('EnvelopeDetailsBodyStatsComponent', () => {
    let component: EnvelopeDetailsBodyStatsComponent;
    let fixture: ComponentFixture<EnvelopeDetailsBodyStatsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EnvelopeDetailsBodyStatsComponent, MockBudgetCurrencyPipe],
            providers: [EnvelopesSelectionService]
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
