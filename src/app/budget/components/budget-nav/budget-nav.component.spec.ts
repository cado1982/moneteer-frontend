import { TestBed, ComponentFixture } from "@angular/core/testing";
import { BudgetNavComponent } from "./budget-nav.component";
import { Store } from "@ngrx/store";
import { AccountModel } from "../../../accounts/models";
import { Component } from "@angular/core";
import { IAccountsState, getAccounts } from "../../../core/reducers/accounts.reducer";
import { cold } from 'jest-marbles';
import { MockBudgetCurrencyPipe } from "src/app/testing/budget-currency-pipe.mock";
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
    selector: 'moneteer-nav',
    template: '<p>Mock Nav Component</p>'
})
class MockNavComponent { }

@Component({
    selector: 'moneteer-account-create',
    template: '<p>Mock Account Create Component</p>'
})
class MockAccountCreateComponent { }


describe("Component: BudgetNavComponent", () => {

    const budgetAccount = new AccountModel();
    budgetAccount.isBudget = true;
    const offBudgetAccount = new AccountModel();
    offBudgetAccount.isBudget = false;

    let component: BudgetNavComponent;
    let fixture: ComponentFixture<BudgetNavComponent>;
    let store: MockStore<IAccountsState>;
    let storeInitialState: IAccountsState = {
        loading: false,
        creating: false,
        accounts: [budgetAccount, offBudgetAccount],
        deleting: false,
        showCreate: false,
        activeAccountId: ''
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            providers: [
                BudgetNavComponent,
                provideMockStore({ initialState: storeInitialState }),
            ],
            declarations: [
                BudgetNavComponent,
                MockBudgetCurrencyPipe,
                MockNavComponent,
                MockAccountCreateComponent
            ]
        }).overrideModule(BrowserDynamicTestingModule, {
            set: {
                entryComponents: [MockAccountCreateComponent],
            }
        });;

    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BudgetNavComponent);
        component = fixture.componentInstance;
        store = TestBed.get<Store<IAccountsState>>(Store);
        store.overrideSelector(getAccounts, [budgetAccount, offBudgetAccount]);
    });

    test("should create", () => {
        expect(component).toBeTruthy();
    });


    test("selected only budget accounts", () => {
        component.ngOnInit();

        const expected = cold("a", { a: [budgetAccount] });
        expect(component.budgetAccounts).toBeObservable(expected)
    });

    test("orders account by name", () => {
        const account1 = new AccountModel();
        account1.isBudget = true;
        account1.name = "b";
        const account2 = new AccountModel();
        account2.isBudget = true;
        account2.name = "a";

        store.overrideSelector(getAccounts, [account1, account2])

        component.ngOnInit();

        const expected = cold("a", { a: [account2, account1] });
        expect(component.budgetAccounts).toBeObservable(expected)
    });

});
