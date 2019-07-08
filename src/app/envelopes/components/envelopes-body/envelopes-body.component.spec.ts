import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopesBodyComponent } from './envelopes-body.component';

describe('EnvelopesBodyComponent', () => {
  let component: EnvelopesBodyComponent;
  let fixture: ComponentFixture<EnvelopesBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopesBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopesBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
