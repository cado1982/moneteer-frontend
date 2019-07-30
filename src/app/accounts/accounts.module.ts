import { NgModule } from "@angular/core";

import { SharedModule } from "./../shared/shared.module";
import { AccountsHomeComponent, TransactionListComponent, TransactionCreateInflowComponent,
         TransactionCreateOutflowComponent,
         AccountsDetailComponent, TransactionHeaderComponent,
         TransactionFooterComponent, TransactionComponent, TransactionAssignmentComponent, EnvelopeSelectDropdownComponent,
         PayeeSelectDropdownComponent, AccountSelectDropdownComponent, TransactionListNoAccountsComponent } from "./components";
import { CategoryDisplayPipe } from "./directives/category.month.display.pipe";
import { AccountsRoutingModule } from "./accounts.routing.module";

@NgModule({
    declarations: [
        AccountsHomeComponent,
        TransactionListComponent,
        TransactionListNoAccountsComponent,
        TransactionCreateInflowComponent,
        TransactionCreateOutflowComponent,
        TransactionHeaderComponent,
        TransactionFooterComponent,
        AccountsDetailComponent,
        TransactionComponent,
        TransactionAssignmentComponent,
        CategoryDisplayPipe,
        AccountSelectDropdownComponent,
        PayeeSelectDropdownComponent,
        EnvelopeSelectDropdownComponent
    ],
    providers: [
        CategoryDisplayPipe
    ],
    imports: [
        AccountsRoutingModule,
        SharedModule
    ],
    exports: [
    ]
})
export class AccountsModule {
}
