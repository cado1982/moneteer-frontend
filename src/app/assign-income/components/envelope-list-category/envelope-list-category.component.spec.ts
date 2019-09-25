import { Spectator, createTestComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { EnvelopeListCategoryComponent } from './envelope-list-category.component';
import { EnvelopeListEnvelopeComponent } from '../envelope-list-envelope/envelope-list-envelope.component';
import { EnvelopeCategoryModel } from 'src/app/core/models';

describe('EnvelopeListCategoryComponent', () => {
    let spectator: Spectator<EnvelopeListCategoryComponent>;
    const createComponent = createTestComponentFactory({
        component: EnvelopeListCategoryComponent,
        declarations: [
            MockComponent(EnvelopeListEnvelopeComponent)
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('category name should be displayed', () => {
        spectator.component.category = new EnvelopeCategoryModel("CategoryName");
        spectator.detectChanges();
        const element = spectator.query(".category-header");
        expect(element).toHaveText("CategoryName");
    });
});
