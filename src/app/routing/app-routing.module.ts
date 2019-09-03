import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthCallbackComponent } from "../core/components/auth-callback/auth-callback.component";
import { AuthGuard } from "../core/guards/auth.guard";
import { BudgetsResolver } from "./resolvers/budgets.resolver";
import { BudgetResolver } from "./resolvers/budget.resolver";
import { AccountsResolver } from "./resolvers/accounts.resolver";
import { TransactionsResolver } from "./resolvers/transactions.resolver";
import { PayeesResolver } from "./resolvers/payees.resolver";
import { EnvelopesResolver } from "./resolvers/envelopes.resolver";
import { RecentTransactionsResolver } from "./resolvers/recent.transactions.resolver";
import { ForbiddenComponent } from "../core/components/forbidden/forbidden.component";

export const routes: Routes = [
    { path: "auth-callback", component: AuthCallbackComponent },
    { path: "forbidden", component: ForbiddenComponent },
    { path: "budget", loadChildren: "./../budget/budget.module#BudgetModule", canActivate: [AuthGuard] },
    { path: "**", redirectTo: "budget" }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always', /*enableTracing: true*/})
    ],
    exports: [RouterModule],
    providers: [
        BudgetsResolver,
        BudgetResolver,
        AccountsResolver,
        TransactionsResolver,
        PayeesResolver,
        EnvelopesResolver,
        RecentTransactionsResolver
    ]
})
export class AppRoutingModule {

}

