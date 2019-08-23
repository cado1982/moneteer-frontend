import { Spectator, createTestComponentFactory } from '@netbasal/spectator/jest';
import { PayeeSelectDropdownComponent } from './payee.select.dropdown.component';
import { MockComponent } from 'ng-mocks';
import { DropdownListComponent } from 'src/app/shared/components/dropdown-list/dropdown-list.component';

describe('PayeeSelectDropdownComponent', () => {
    let spectator: Spectator<PayeeSelectDropdownComponent>;
    const createComponent = createTestComponentFactory({
        component: PayeeSelectDropdownComponent,
        declarations: [
            MockComponent(DropdownListComponent)
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
