import { Spectator, createTestComponentFactory } from '@netbasal/spectator/jest';

import { EnvelopeCategorySelectDropdownComponent } from './envelope-category-select-dropdown.component';
import { MockComponent } from 'ng-mocks';
import { DropdownListComponent } from '../dropdown-list/dropdown-list.component';


describe('EnvelopeCategorySelectDropdownComponent', () => {
    let spectator: Spectator<EnvelopeCategorySelectDropdownComponent>;
    const createComponent = createTestComponentFactory({
        component: EnvelopeCategorySelectDropdownComponent,
        declarations: [
            MockComponent(DropdownListComponent)
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});





