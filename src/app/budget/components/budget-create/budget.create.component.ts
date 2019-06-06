import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { CURRENCIES, Currency, DATE_FORMATS, CURRENCY_FORMATS, CurrencyFormat } from "./../../../static";

import { SymbolLocation, BudgetModel } from "../../../core/models/index";
import { NotificationsService } from "../../../core/services/index";
import { Observable, Subject } from "rxjs";
import { Store, select } from "@ngrx/store";
import { IBudgetsState, getShowCreate, getIsCreating } from "../../../core/reducers/budget.reducer";
import { CreateBudgetAction, HideCreateBudgetAction, BudgetActionTypes, CreateBudgetFailureAction } from "../../../core/actions/budget.actions";
import { Actions, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";

@Component({
    selector: "moneteer-budget-create",
    templateUrl: "./budget.create.component.html",
    styleUrls: ["./budget.create.component.scss"],
})
export class BudgetCreateComponent implements OnInit {
    public budget: BudgetModel;

    public currencies: Array<Currency>;
    public currencyFormats: Array<CurrencyFormat>;
    public currencySymbolLocations: Array<{name: string, id: number}>;
    public dateFormats: Array<string>;

    public isOpen: boolean;
    public error$: Subject<string> = new Subject<string>();
    public isCreating$: Observable<boolean>;

    @ViewChild("createBudgetForm", {static: false}) private createBudgetForm: NgForm;

    constructor(
        private router: Router,
        private notificationsService: NotificationsService,
        private store: Store<IBudgetsState>,
        private actions$: Actions) { }

    public ngOnInit(): void {
        this.currencies = CURRENCIES;
        this.dateFormats = DATE_FORMATS;
        this.currencyFormats = CURRENCY_FORMATS;
        this.currencySymbolLocations = [
            {name: "Before", id: SymbolLocation.Before},
            {name: "After", id: SymbolLocation.After},
            {name: "Hidden", id: SymbolLocation.Hidden}
        ];

        this.actions$.pipe(
            ofType(BudgetActionTypes.CreateFailure),
            map((action: CreateBudgetFailureAction) => action.payload.error)
        ).subscribe(error => this.error$.next(error));

        this.store.select(getShowCreate).subscribe(isOpen => {
            this.isOpen = isOpen;
            if (isOpen) {
                this.budget = new BudgetModel("", this.currencies[0], this.dateFormats[0], this.currencyFormats[0], SymbolLocation.Before);
                this.error$.next("");
            }
        });

        this.isCreating$ = this.store.select(getIsCreating);
    }

    public create(): void {
        if (!this.createBudgetForm.valid) {
            return;
        }

        this.store.dispatch(new CreateBudgetAction({budget: this.budget}));
    }

    public getDate(): Date {
        return new Date();
    }

    public close(): void {
        this.store.dispatch(new HideCreateBudgetAction());
    }
}
