import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountsDetailComponent, AccountsHomeComponent } from "./components/index";
import { TransactionsResolver } from "../routing/resolvers/transactions.resolver";

const routes: Routes = [{
    path: "", component: AccountsHomeComponent, children: [
        { path: ":accountId", component: AccountsDetailComponent, resolve: {transactions: TransactionsResolver} },
        { path: "", component: AccountsDetailComponent, resolve: {transactions: TransactionsResolver} },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountsRoutingModule {

}
