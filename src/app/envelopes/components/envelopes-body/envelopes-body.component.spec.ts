import { Spectator, createTestComponentFactory, mockProvider } from '@ngneat/spectator/jest';

import { MockComponent } from 'ng-mocks';
import { EnvelopesBodyComponent } from './envelopes-body.component';
import { EnvelopesCategoriesComponent } from '../envelopes-categories/envelopes.categories.component';
import { EnvelopeDetailsComponent } from '../envelope-details/envelope-details.component';


describe('EnvelopesBodyComponent', () => {
    let spectator: Spectator<EnvelopesBodyComponent>;
    const createComponent = createTestComponentFactory({
        component: EnvelopesBodyComponent,
        declarations: [
            MockComponent(EnvelopesCategoriesComponent),
            MockComponent(EnvelopeDetailsComponent)
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});





