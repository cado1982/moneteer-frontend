import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeCategorySelectDropdownComponent } from './envelope-category-select-dropdown.component';
import { DropdownListComponent } from '../dropdown-list/dropdown-list.component';

describe('EnvelopeCategorySelectDropdownComponent', () => {
  let component: EnvelopeCategorySelectDropdownComponent;
  let fixture: ComponentFixture<EnvelopeCategorySelectDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopeCategorySelectDropdownComponent, DropdownListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopeCategorySelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
