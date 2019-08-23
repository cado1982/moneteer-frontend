import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeDetailsComponent } from './envelope-details.component';
import { Input, Component } from '@angular/core';
import { EnvelopeModel } from 'src/app/core/models';
import { EnvelopesSelectionService } from '../../services/envelopes-selection.service';

@Component({
    selector: 'moneteer-envelope-details-header',
    template: '<p>Mock Envelope Details Header Component</p>'
})
class MockEnvelopeDetailsHeaderComponent {
    @Input() selectedEnvelope: EnvelopeModel;
}

@Component({
    selector: 'moneteer-envelope-details-body',
    template: '<p>Mock Envelope Details Body Component</p>'
})
class MockEnvelopeDetailsBodyComponent {
    @Input() selectedEnvelope: EnvelopeModel;
}

describe('EnvelopeDetailsComponent', () => {
    let component: EnvelopeDetailsComponent;
    let fixture: ComponentFixture<EnvelopeDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EnvelopeDetailsComponent, MockEnvelopeDetailsBodyComponent, MockEnvelopeDetailsHeaderComponent],
            providers: [EnvelopesSelectionService]
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
