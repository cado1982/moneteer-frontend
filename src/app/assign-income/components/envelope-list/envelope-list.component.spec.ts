import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeListComponent } from './envelope-list.component';
import { EnvelopeListCategoryComponent } from '../envelope-list-category/envelope-list-category.component';

describe('EnvelopeListComponent', () => {
    let component: EnvelopeListComponent;
    let fixture: ComponentFixture<EnvelopeListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EnvelopeListComponent, EnvelopeListCategoryComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EnvelopeListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
