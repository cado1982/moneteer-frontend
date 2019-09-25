import { Spectator, createTestComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnvelopeDetailsBodyComponent } from './envelope-details-body.component';
import { EnvelopeDetailsBodyStatsComponent } from '../envelope-details-body-stats/envelope-details-body-stats.component';
import { EnvelopeDetailsBodyActionsComponent } from '../envelope-details-body-actions/envelope-details-body-actions.component';
import { EnvelopeDetailsBodyRecentTransactionsComponent } from '../envelope-details-body-recent-transactions/envelope-details-body-recent-transactions.component';

describe('EnvelopeDetailsBodyComponent', () => {
    let spectator: Spectator<EnvelopeDetailsBodyComponent>;
    const createComponent = createTestComponentFactory({
        imports: [ReactiveFormsModule, FormsModule],
        component: EnvelopeDetailsBodyComponent,
        declarations: [
            MockComponent(EnvelopeDetailsBodyStatsComponent),
            MockComponent(EnvelopeDetailsBodyActionsComponent),
            MockComponent(EnvelopeDetailsBodyRecentTransactionsComponent)
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});

