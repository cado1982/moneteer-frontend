import { HeaderProgressComponent } from '../header-progress/header-progress.component';
import { AssignIncomeService } from '../../services/assign-income.service';
import { Spectator, createTestComponentFactory, mockProvider } from '@netbasal/spectator/jest';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('HeaderProgressComponent', () => {
    let spectator: Spectator<HeaderProgressComponent>;
    let createComponent = createTestComponentFactory({
        component: HeaderProgressComponent,
        imports: [NgbModule],
        providers: [
            mockProvider(AssignIncomeService)
        ]
    });

    beforeEach(() => spectator = createComponent());


    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
