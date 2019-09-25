import { Spectator, createTestComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { EnvelopeListComponent } from './envelope-list.component';
import { EnvelopeListCategoryComponent } from '../envelope-list-category/envelope-list-category.component';
import { AssignIncomeService } from '../../services/assign-income.service';
import { provideMockStore } from '@ngrx/store/testing';
import { empty } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('EnvelopeListComponent', () => {
    let spectator: Spectator<EnvelopeListComponent>;
    const createComponent = createTestComponentFactory({
        imports: [RouterTestingModule],
        component: EnvelopeListComponent,
        declarations: [
            MockComponent(EnvelopeListCategoryComponent)
        ],
        providers: [
            AssignIncomeService, 
            provideMockStore({initialState: {}}),
            provideMockActions(() => empty())
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});

