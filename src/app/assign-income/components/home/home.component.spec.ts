import { createTestComponentFactory } from '@netbasal/spectator/jest/spectator';
import { Spectator } from '@netbasal/spectator/jest/internals';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { MockComponent } from 'ng-mocks';
import { HeaderComponent } from '../header/header.component';
import { WorkspaceComponent } from '../workspace/workspace.component';

describe('HomeComponent', () => {
    let spectator: Spectator<HomeComponent>;
    let createComponent = createTestComponentFactory({
        component: HomeComponent,
        imports: [NgbModule],
        declarations: [MockComponent(HeaderComponent), MockComponent(WorkspaceComponent)]
    });

    beforeEach(() => spectator = createComponent());


    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
