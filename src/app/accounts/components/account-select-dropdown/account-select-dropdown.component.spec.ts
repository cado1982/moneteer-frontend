import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSelectDropdownComponent } from './account-select-dropdown.component';
import { DropdownComponent } from '../../../shared/components';
import { FormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';

describe('AccountSelectDropdownComponent', () => {
  let component: AccountSelectDropdownComponent;
  let fixture: ComponentFixture<AccountSelectDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSelectDropdownComponent, DropdownComponent ],
      imports: [ FormsModule, NgPipesModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSelectDropdownComponent);
    component = fixture.componentInstance;
    component.accounts = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
