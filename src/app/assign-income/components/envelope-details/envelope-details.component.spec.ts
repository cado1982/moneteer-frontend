import { EnvelopeDetailsComponent } from './envelope-details.component';
import { Spectator } from '@netbasal/spectator/jest/internals';
import { createTestComponentFactory } from '@netbasal/spectator/jest/spectator';

describe('EnvelopeDetailsComponent', () => {
    let spectator: Spectator<EnvelopeDetailsComponent>;
    const createComponent = createTestComponentFactory(EnvelopeDetailsComponent);

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
