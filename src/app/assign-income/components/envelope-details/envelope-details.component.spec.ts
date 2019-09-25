import { EnvelopeDetailsComponent } from './envelope-details.component';
import { Spectator, createTestComponentFactory } from '@ngneat/spectator/jest';

describe('EnvelopeDetailsComponent', () => {
    let spectator: Spectator<EnvelopeDetailsComponent>;
    const createComponent = createTestComponentFactory(EnvelopeDetailsComponent);

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
