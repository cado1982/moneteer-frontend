import { HeaderProgressComponent } from '../header-progress/header-progress.component';
import { AssignIncomeService } from '../../services/assign-income.service';
import { createTestComponentFactory } from '@netbasal/spectator/jest/spectator';
import { Spectator } from '@netbasal/spectator/jest/internals';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('HeaderProgressComponent', () => {
    let spectator: Spectator<HeaderProgressComponent>;
    let createComponent = createTestComponentFactory({
        component: HeaderProgressComponent,
        imports: [NgbModule],
        providers: [
            AssignIncomeService
        ]
    });

    beforeEach(() => spectator = createComponent());


    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
