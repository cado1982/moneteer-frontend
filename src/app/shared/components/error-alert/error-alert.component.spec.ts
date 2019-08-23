import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorAlertComponent } from './error-alert.component';

describe('ErrorAlertComponent', () => {
    let component: ErrorAlertComponent;
    let fixture: ComponentFixture<ErrorAlertComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ErrorAlertComponent],
            providers: [ErrorAlertComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ErrorAlertComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
