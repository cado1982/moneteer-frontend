import { NgModule } from "@angular/core";
import { SharedModule } from "./../shared/shared.module";
import { BudgetCreateComponent, BudgetHomeComponent,
         AccountCreateComponent, BudgetDeleteComponent } from "./components";
import { BudgetRoutingModule } from "./budget.routing.module";
import { BudgetSelectComponent } from "./components/budget-select/budget.select.component";
import { BudgetNavComponent } from "./components/budget-nav/budget-nav.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
    declarations: [
        BudgetHomeComponent,
        BudgetCreateComponent,
        BudgetSelectComponent,
        BudgetDeleteComponent,
        BudgetNavComponent,
        AccountCreateComponent
    ],
    imports: [
        SharedModule,
        BudgetRoutingModule
    ],
    providers: []
})
export class BudgetModule {
}
