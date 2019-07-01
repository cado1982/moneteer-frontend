import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeListEnvelopeComponent } from './envelope-list-envelope.component';

describe('EnvelopeListEnvelopeComponent', () => {
  let component: EnvelopeListEnvelopeComponent;
  let fixture: ComponentFixture<EnvelopeListEnvelopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopeListEnvelopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopeListEnvelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
