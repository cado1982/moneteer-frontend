import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopesAddModalComponent } from './envelopes-add-modal.component';

describe('EnvelopesAddModalComponent', () => {
  let component: EnvelopesAddModalComponent;
  let fixture: ComponentFixture<EnvelopesAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopesAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopesAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
