import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EnvelopesHomeComponent } from "./components/index";

const routes: Routes = [
    { path: "", component: EnvelopesHomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EnvelopesRoutingModule {

}
