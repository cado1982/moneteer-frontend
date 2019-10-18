import { Spectator, createTestComponentFactory } from '@ngneat/spectator/jest';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { provideMockActions } from '@ngrx/effects/testing';
import { empty } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockComponent } from 'ng-mocks';
import { ErrorAlertComponent } from 'src/app/shared/components/error-alert/error-alert.component';
import { EnvelopesAddModalComponent } from './envelopes-add-modal.component';
import { EnvelopeCategorySelectDropdownComponent } from 'src/app/shared/components/envelope-category-select-dropdown/envelope-category-select-dropdown.component';


describe('EnvelopesAddModalComponent', () => {
    let spectator: Spectator<EnvelopesAddModalComponent>;
    const createComponent = createTestComponentFactory({
        component: EnvelopesAddModalComponent,
        providers: [
            NgbActiveModal,
            provideMockActions(() => empty()),
            provideMockStore({ initialState: {}})
        ],
        imports: [
            FormsModule,
            ReactiveFormsModule
        ],
        declarations: [
            MockComponent(ErrorAlertComponent),
            MockComponent(EnvelopeCategorySelectDropdownComponent)
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});





