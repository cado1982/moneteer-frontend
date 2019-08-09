import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeAddCategoryModalComponent } from './envelope-add-category-modal.component';

describe('EnvelopeAddCategoryModalComponent', () => {
  let component: EnvelopeAddCategoryModalComponent;
  let fixture: ComponentFixture<EnvelopeAddCategoryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopeAddCategoryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopeAddCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
