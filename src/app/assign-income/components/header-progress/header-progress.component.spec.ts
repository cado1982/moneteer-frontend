import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProgressComponent } from './header-progress.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AssignIncomeService } from '../../services/assign-income.service';

describe('HeaderProgressComponent', () => {
    let component: HeaderProgressComponent;
    let fixture: ComponentFixture<HeaderProgressComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderProgressComponent],
            providers: [AssignIncomeService],
            imports: [NgbModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderProgressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
