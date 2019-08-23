import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeSelectDropdownComponent } from './envelope.select.dropdown.component';
import { FormsModule } from '@angular/forms';
import { DropdownListComponent } from '../dropdown-list/dropdown-list.component';
import { MockPipe, MockComponent } from 'ng-mocks';
import { BudgetCurrencyPipe } from '../../pipes/budget.currency.pipe';

describe('EnvelopeSelectDropdownComponent', () => {
    let component: EnvelopeSelectDropdownComponent;
    let fixture: ComponentFixture<EnvelopeSelectDropdownComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EnvelopeSelectDropdownComponent,
                MockPipe(BudgetCurrencyPipe),
                MockComponent(DropdownListComponent)
            ],
            imports: [FormsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EnvelopeSelectDropdownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
