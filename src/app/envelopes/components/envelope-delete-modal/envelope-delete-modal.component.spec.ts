import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeDeleteModalComponent } from './envelope-delete-modal.component';
import { ErrorAlertComponent } from 'src/app/shared/components/error-alert/error-alert.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('EnvelopeDeleteModalComponent', () => {
  let component: EnvelopeDeleteModalComponent;
  let fixture: ComponentFixture<EnvelopeDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopeDeleteModalComponent, ErrorAlertComponent ],
      providers: [NgbActiveModal]
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
