import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeeSelectDropdownComponent } from './payee.select.dropdown.component';
import { DropdownComponent } from '../../../shared/components';
import { FormsModule } from '@angular/forms';
import { FilterByPipe } from 'src/app/shared/pipes/filter.by.pipe';

describe('PayeeSelectDropdownComponent', () => {
  let component: PayeeSelectDropdownComponent;
  let fixture: ComponentFixture<PayeeSelectDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayeeSelectDropdownComponent, DropdownComponent, FilterByPipe ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeeSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
