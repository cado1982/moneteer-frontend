import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EnvelopesHomeComponent } from "./components/index";
import { EnvelopesResolver } from "../routing/resolvers/envelopes.resolver";

const routes: Routes = [
    { path: "", component: EnvelopesHomeComponent, resolve: [EnvelopesResolver] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EnvelopesRoutingModule {

}
