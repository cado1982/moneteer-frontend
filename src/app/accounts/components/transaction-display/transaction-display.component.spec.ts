import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDisplayComponent } from './transaction-display.component';

describe('TransactionDisplayComponent', () => {
  let component: TransactionDisplayComponent;
  let fixture: ComponentFixture<TransactionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
