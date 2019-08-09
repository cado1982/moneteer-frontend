import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EnvelopesHomeComponent } from "./components/index";
import { RecentTransactionsResolver } from "../routing/resolvers/recent.transactions.resolver";

const routes: Routes = [
    { path: "", component: EnvelopesHomeComponent, resolve: { recentTransactions: RecentTransactionsResolver} }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EnvelopesRoutingModule {

}
