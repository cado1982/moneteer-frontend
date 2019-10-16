import { Spectator, createTestComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { EnvelopeDetailsComponent } from './envelope-details.component';
import { EnvelopeDetailsHeaderComponent } from '../envelope-details-header/envelope-details-header.component';
import { EnvelopeDetailsBodyComponent } from '../envelope-details-body/envelope-details-body.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('EnvelopeDetailsComponent', () => {
    let spectator: Spectator<EnvelopeDetailsComponent>;
    const createComponent = createTestComponentFactory({
        component: EnvelopeDetailsComponent,
        declarations: [
            MockComponent(EnvelopeDetailsHeaderComponent, ),
            MockComponent(EnvelopeDetailsBodyComponent)
        ],
        providers: [
            provideMockStore({initialState: {}})
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});


