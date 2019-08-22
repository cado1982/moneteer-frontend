import { TestBed } from "@angular/core/testing";

import { BudgetNavComponent } from "./budget-nav.component";
import { Store } from "@ngrx/store";
import { AccountModel } from "../../../accounts/models";
import { Component } from "@angular/core";
import { IAccountsState } from "../../../core/reducers/accounts.reducer";
import { hot, cold, getTestScheduler } from 'jasmine-marbles';
import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

describe("BudgetNavComponent", () => {
    let component: BudgetNavComponent;
    const budgetAccount = new AccountModel();
    budgetAccount.isBudget = true;
    const offBudgetAccount = new AccountModel();
    offBudgetAccount.isBudget = false;

    let store: Store<IAccountsState>;

    beforeEach(() => {
        const activatedRouteSpy = jasmine.createSpyObj<ActivatedRoute>('ActivatedRoute', []);
        const ngbModalSpy = jasmine.createSpyObj<NgbModal>('NgbModal', ['open']);
        const eventSpy = jasmine.createSpyObj<Event>('Event', ['stopPropagation']);

        TestBed.configureTestingModule({
            providers: [
                BudgetNavComponent,
                { provide: ActivatedRoute, useClass: activatedRouteSpy },
                { provide: NgbModal, useClass: ngbModalSpy },
                {
                    provide: Store,
                    useValue: {
                        pipe: jest.fn()
                    }
                }
            ]
        });

        component = TestBed.get(BudgetNavComponent);
        store = TestBed.get(Store);
    });

    test("should create", () => {
        expect(component).toBeTruthy();
    });

    //   test("assigns off-budget accounts correctly", () => {
    //     const store = TestBed.get(Store);
    //     store.pipe = jest.fn(() => hot("-a", { a: [offBudgetAccount] }));

    //     component.ngOnInit();

    //     const expected = cold("-a", { a: [offBudgetAccount] });
    //     expect(component.offBudgetAccounts).toBeObservable(expected)
    //   });

    test("assigns budget accounts correctly", () => {
        store.pipe = jest.fn(() => hot("-a", { a: [budgetAccount] }));

        component.ngOnInit();

        const expected = cold("-a", { a: [budgetAccount] });
        expect(component.budgetAccounts).toBeObservable(expected)
    });



    test("openCreateAccount", () => {
            const event = TestBed.get(Event);
            component.openCreateAccount(event);
            expect(event.stopPropagation).toHaveBeenCalledTimes(1);

        




    });

});
