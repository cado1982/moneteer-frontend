import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeDetailsComponent } from './envelope-details.component';

describe('EnvelopeDetailsComponent', () => {
    let component: EnvelopeDetailsComponent;
    let fixture: ComponentFixture<EnvelopeDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EnvelopeDetailsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EnvelopeDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
