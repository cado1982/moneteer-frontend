import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BudgetHomeComponent } from "./components/index";
import { BudgetSelectComponent } from "./components/budget-select/budget.select.component";
import { BudgetResolver } from "../routing/resolvers/budget.resolver";
import { AccountsResolver } from "../routing/resolvers/accounts.resolver";
import { BudgetsResolver } from "../routing/resolvers/budgets.resolver";
import { PayeesResolver } from "../routing/resolvers/payees.resolver";
import { EnvelopesResolver } from "../routing/resolvers/envelopes.resolver";

const routes: Routes = [
    { path: "", component: BudgetSelectComponent, resolve: { budgets: BudgetsResolver } },
    {
        path: ":budgetId",
        component: BudgetHomeComponent,
        resolve: {
            budget: BudgetResolver,
            accounts: AccountsResolver,
            payees: PayeesResolver,
            //envelopes: EnvelopesResolver
        },
        children: [
            { path: "accounts", loadChildren: "./../accounts/accounts.module#AccountsModule" },
            { path: "envelopes", loadChildren: "./../envelopes/envelopes.module#EnvelopesModule" },
            { path: "", redirectTo: "accounts", pathMatch: "full" }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BudgetRoutingModule {

}
