import { Spectator, createTestComponentFactory } from '@netbasal/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { WorkspaceComponent } from '../workspace/workspace.component';
import { EnvelopeListComponent } from '../envelope-list/envelope-list.component';
import { EnvelopeDetailsComponent } from '../envelope-details/envelope-details.component';

describe('WorkspaceComponent', () => {
    let spectator: Spectator<WorkspaceComponent>;
    let createComponent = createTestComponentFactory({
        component: WorkspaceComponent,
        declarations: [MockComponent(EnvelopeListComponent), MockComponent(EnvelopeDetailsComponent)]
    });

    beforeEach(() => spectator = createComponent());


    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
