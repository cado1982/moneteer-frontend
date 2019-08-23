import { Spectator, createTestComponentFactory, mockProvider } from '@netbasal/spectator/jest';

import { MockComponent } from 'ng-mocks';
import { EnvelopesDataService } from '../../services/envelopes-data.service';
import { EnvelopesCategoriesListComponent } from './envelopes-categories-list.component';
import { EnvelopesCategoryComponent } from '../envelopes-category/envelopes.category.component';


describe('EnvelopesCategoriesListComponent', () => {
    let spectator: Spectator<EnvelopesCategoriesListComponent>;
    const createComponent = createTestComponentFactory({
        component: EnvelopesCategoriesListComponent,
        providers: [
            mockProvider(EnvelopesDataService)
        ],
        declarations: [
            MockComponent(EnvelopesCategoryComponent)
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});





