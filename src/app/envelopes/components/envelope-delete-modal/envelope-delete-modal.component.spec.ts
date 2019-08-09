import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeDeleteModalComponent } from './envelope-delete-modal.component';

describe('EnvelopeDeleteModalComponent', () => {
  let component: EnvelopeDeleteModalComponent;
  let fixture: ComponentFixture<EnvelopeDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopeDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopeDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
