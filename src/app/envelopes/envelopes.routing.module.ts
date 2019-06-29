import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EnvelopesHomeComponent, EnvelopesAssignIncomeComponent } from "./components/index";

const routes: Routes = [
    { path: "", component: EnvelopesHomeComponent },
    { path: "assignIncome", component: EnvelopesAssignIncomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EnvelopesRoutingModule {

}
