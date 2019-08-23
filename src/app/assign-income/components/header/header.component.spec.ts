import { HeaderComponent } from './header.component';
import { HeaderProgressComponent } from '../header-progress/header-progress.component';
import { AssignIncomeService } from '../../services/assign-income.service';
import { createTestComponentFactory } from '@netbasal/spectator/jest/spectator';
import { MockComponent } from "ng-mocks";
import { Spectator } from '@netbasal/spectator/jest/internals';

describe('HeaderComponent', () => {
    let spectator: Spectator<HeaderComponent>;
    let createComponent = createTestComponentFactory({
        component: HeaderComponent,
        providers: [
            AssignIncomeService
        ],
        declarations: [MockComponent(HeaderProgressComponent)]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
