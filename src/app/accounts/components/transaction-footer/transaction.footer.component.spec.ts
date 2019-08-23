import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TransactionFooterComponent } from "./transaction.footer.component";
import { BudgetCurrencyPipe } from "../../../shared/pipes/budget.currency.pipe";
import { provideMockStore } from "@ngrx/store/testing";
import { MockPipe } from "ng-mocks";

describe("TransactionFooterComponent", () => {
    let component: TransactionFooterComponent;
    let fixture: ComponentFixture<TransactionFooterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TransactionFooterComponent, 
                MockPipe(BudgetCurrencyPipe)
            ],
            providers: [
                provideMockStore({ initialState: {}})
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
