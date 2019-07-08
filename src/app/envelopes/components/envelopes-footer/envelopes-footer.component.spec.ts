import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopesFooterComponent } from './envelopes-footer.component';

describe('EnvelopesFooterComponent', () => {
  let component: EnvelopesFooterComponent;
  let fixture: ComponentFixture<EnvelopesFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopesFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
