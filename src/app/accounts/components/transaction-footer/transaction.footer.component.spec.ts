import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TransactionFooterComponent } from "./transaction.footer.component";
import { BudgetCurrencyPipe } from "../../../shared/pipes/budget.currency.pipe";

describe("TransactionFooterComponent", () => {
  let component: TransactionFooterComponent;
  let fixture: ComponentFixture<TransactionFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionFooterComponent, BudgetCurrencyPipe ],
      providers: [ 
        BudgetCurrencyPipe
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
