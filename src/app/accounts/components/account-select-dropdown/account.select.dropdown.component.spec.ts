import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from '../../../shared/components';
import { FormsModule } from '@angular/forms';
import { AccountSelectDropdownComponent } from 'src/app/accounts/components';
import { FilterByPipe } from 'src/app/shared/pipes/filter.by.pipe';
import { PairsPipe } from 'src/app/shared/pipes/pairs.pipe';
import { GroupByPipe } from 'src/app/shared/pipes/group.by.pipe';

describe('AccountSelectDropdownComponent', () => {
  let component: AccountSelectDropdownComponent;
  let fixture: ComponentFixture<AccountSelectDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AccountSelectDropdownComponent,
        DropdownComponent,
        PairsPipe,
        FilterByPipe,
        GroupByPipe
      ],
      imports: [ FormsModule ]
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
