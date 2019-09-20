import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionActionsComponent } from './transaction-actions.component';

describe('TransactionActionsComponent', () => {
  let component: TransactionActionsComponent;
  let fixture: ComponentFixture<TransactionActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
