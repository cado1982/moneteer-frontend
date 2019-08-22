import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDeleteModalComponent } from './transaction-delete-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('TransactionDeleteModalComponent', () => {
  let component: TransactionDeleteModalComponent;
  let fixture: ComponentFixture<TransactionDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionDeleteModalComponent ],
      providers: [
          { provide: NgbActiveModal, useClass: jasmine.createSpyObj<NgbActiveModal>('NgbActiveModal', []) }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
