import { NgModule } from "@angular/core";

import { SharedModule } from "./../shared/shared.module";
import { AccountsHomeComponent, TransactionListComponent, TransactionCreateInflowComponent,
         TransactionCreateOutflowComponent,
         AccountsDetailComponent, TransactionHeaderComponent,
         TransactionFooterComponent, TransactionComponent, TransactionAssignmentComponent,
         PayeeSelectDropdownComponent, AccountSelectDropdownComponent, TransactionListNoAccountsComponent } from "./components";
import { CategoryDisplayPipe } from "./directives/category.month.display.pipe";
import { AccountsRoutingModule } from "./accounts.routing.module";
import { TransactionDeleteModalComponent } from './components/transaction-delete-modal/transaction-delete-modal.component';

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
        TransactionDeleteModalComponent
    ],
    providers: [
        CategoryDisplayPipe
    ],
    imports: [
        AccountsRoutingModule,
        SharedModule
    ],
    entryComponents: [
        TransactionDeleteModalComponent
    ]
})
export class AccountsModule {
}
