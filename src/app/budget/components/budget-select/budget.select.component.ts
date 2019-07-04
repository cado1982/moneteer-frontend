import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { BudgetModel } from "../../../core/models/index";
import { BudgetDeleteComponent } from "../budget-delete/budget.delete.component";
import { BudgetCreateComponent } from "../budget-create/budget.create.component";
import { Store } from "@ngrx/store";
import { IBudgetsState, getBudgets } from "../../../core/reducers/budget.reducer";
import { ShowDeleteBudgetAction, ShowCreateBudgetAction } from "../../../core/actions/budget.actions";

@Component({
    selector: "moneteer-budget-select",
    template: "",
    //templateUrl: "./budget.select.component.html",
    styleUrls: ["./budget.select.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetSelectComponent implements OnInit {

    public budgets$: Observable<Array<BudgetModel>>;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private store: Store<IBudgetsState>
    ) { }

    ngOnInit(): void {
        this.store.select(getBudgets).subscribe(b => {
            if (b.length === 0) return;

            const firstBudget = b[0];

            this.router.navigate(["budget", firstBudget.id]);
        });

    }

    // public createBudget(): void {
    //     this.store.dispatch(new ShowCreateBudgetAction());
    // }

    // public deleteBudget(budget: BudgetModel): void {
    //     this.store.dispatch(new ShowDeleteBudgetAction({budget}));
    // }
}
