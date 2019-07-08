import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopesCategoriesListComponent } from './envelopes-categories-list.component';

describe('EnvelopesCategoriesListComponent', () => {
  let component: EnvelopesCategoriesListComponent;
  let fixture: ComponentFixture<EnvelopesCategoriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopesCategoriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopesCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
