import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceComponent } from './workspace.component';
import { Component } from '@angular/core';

@Component({
    selector: 'moneteer-assign-income-envelope-list',
    template: '<p>Mock Assign Income Envelope List Component</p>'
})
class MockAssignIncomeEnvelopeListComponent { }

@Component({
    selector: 'moneteer-assign-income-envelope-details',
    template: '<p>Mock Assign Income Envelope Details Component</p>'
})
class MockAssignIncomeEnvelopeDetailsComponent { }

describe('WorkspaceComponent', () => {
    let component: WorkspaceComponent;
    let fixture: ComponentFixture<WorkspaceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WorkspaceComponent, MockAssignIncomeEnvelopeListComponent, MockAssignIncomeEnvelopeDetailsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WorkspaceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
