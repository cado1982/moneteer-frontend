import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeSelectDropdownComponent } from './envelope.select.dropdown.component';
import { DropdownComponent } from '..';
import { FormsModule } from '@angular/forms';
import { MockBudgetCurrencyPipe } from 'src/app/testing/budget-currency-pipe.mock';
import { SharedModule } from '../../shared.module';
import { DropdownListComponent } from '../dropdown-list/dropdown-list.component';

describe('EnvelopeSelectDropdownComponent', () => {
    let component: EnvelopeSelectDropdownComponent;
    let fixture: ComponentFixture<EnvelopeSelectDropdownComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EnvelopeSelectDropdownComponent, DropdownComponent, MockBudgetCurrencyPipe, DropdownListComponent],
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
