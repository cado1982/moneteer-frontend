import { Spectator, createTestComponentFactory } from '@netbasal/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { provideMockStore } from '@ngrx/store/testing';
import { empty } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { EnvelopeAddCategoryModalComponent } from './envelope-add-category-modal.component';
import { ErrorAlertComponent } from 'src/app/shared/components/error-alert/error-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('EnvelopeAddCategoryModalComponent', () => {
    let spectator: Spectator<EnvelopeAddCategoryModalComponent>;
    const createComponent = createTestComponentFactory({
        imports: [ReactiveFormsModule, FormsModule],
        component: EnvelopeAddCategoryModalComponent,
        declarations: [
            MockComponent(ErrorAlertComponent)
        ],
        providers: [
            provideMockStore({initialState: {}}),
            provideMockActions(() => empty()),
            NgbActiveModal
        ]
    });

    beforeEach(() => spectator = createComponent());


    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});

