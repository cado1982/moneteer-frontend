import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeListCategoryComponent } from './envelope-list-category.component';

describe('EnvelopeListCategoryComponent', () => {
  let component: EnvelopeListCategoryComponent;
  let fixture: ComponentFixture<EnvelopeListCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopeListCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopeListCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
