import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeMoveBalanceModalComponent } from './envelope-move-balance-modal.component';

describe('EnvelopeMoveBalanceModalComponent', () => {
  let component: EnvelopeMoveBalanceModalComponent;
  let fixture: ComponentFixture<EnvelopeMoveBalanceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvelopeMoveBalanceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopeMoveBalanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
