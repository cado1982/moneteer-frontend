import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TransactionHeaderComponent } from "./transaction.header.component";
import { Store, select } from "@ngrx/store";
import { ITransactionsState, CreateTransactionMode, getSelectedTransactions } from "../../../core/reducers/transactions.reducer";
import { TransactionsActions, ShowCreateTransactionAction } from "../../../core/actions/transactions.actions";
import { Observable } from "rxjs";
import { provideMockActions } from "@ngrx/effects/testing";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";
import { hot } from "jasmine-marbles";
import { when } from "jest-when";

describe("TransactionHeaderComponent", () => {
  let component: TransactionHeaderComponent;
  let fixture: ComponentFixture<TransactionHeaderComponent>;
  const actions$: Observable<TransactionsActions> = new Observable();
  let store: Store<ITransactionsState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionHeaderComponent ],
      imports: [ 
        NoopAnimationsModule
      ],
      providers: [ 
        {
          provide: Store, 
          useValue: {
            dispatch: jest.fn(),
            pipe: jest.fn(),
            select: jest.fn()
          }
        },
        provideMockActions(() => actions$)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionHeaderComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    fixture.detectChanges();
  }));

  test("should be created", () => {
    expect(component).toBeTruthy();
  });

  test("should allow adding inflow", () => {
    const spy = jest.spyOn(store, 'dispatch');
    const action = new ShowCreateTransactionAction({mode: CreateTransactionMode.Inflow});
    
    let addInflowButton = fixture.debugElement.query(By.css("#addInflow"));
    addInflowButton.triggerEventHandler("click", null);

    expect(spy).toHaveBeenCalledWith(action);
  });

  test("should allow adding outflow", () => {
    const spy = jest.spyOn(store, 'dispatch');
    const action = new ShowCreateTransactionAction({mode: CreateTransactionMode.Outflow});
    
    let addOutflowButton = fixture.debugElement.query(By.css("#addOutflow"));
    addOutflowButton.triggerEventHandler("click", null);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
