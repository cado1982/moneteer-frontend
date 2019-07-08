import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeCategorySelectDropdownComponent } from './envelope-category-select-dropdown.component';

describe('EnvelopeCategorySelectDropdownComponent', () => {
  let component: EnvelopeCategorySelectDropdownComponent;
  let fixture: ComponentFixture<EnvelopeCategorySelectDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopeCategorySelectDropdownComponent ]
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
