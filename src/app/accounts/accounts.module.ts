import { NgModule } from "@angular/core";

import { SharedModule } from "./../shared/shared.module";
import { AccountsHomeComponent, TransactionListComponent,
         AccountsDetailComponent, TransactionHeaderComponent,
         TransactionFooterComponent, TransactionComponent, TransactionAssignmentComponent,
         PayeeSelectDropdownComponent, AccountSelectDropdownComponent, TransactionListNoAccountsComponent } from "./components";
import { CategoryDisplayPipe } from "./directives/category.month.display.pipe";
import { AccountsRoutingModule } from "./accounts.routing.module";
import { TransactionDeleteModalComponent } from './components/transaction-delete-modal/transaction-delete-modal.component';
import { TransactionEditComponent } from './components/transaction-edit/transaction-edit.component';
import { TransactionDisplayComponent } from './components/transaction-display/transaction-display.component';
import { TransactionActionsComponent } from './components/transaction-actions/transaction-actions.component';
import { TransactionCreateComponent } from './components/transaction-create/transaction-create.component';

@NgModule({
    declarations: [
        AccountsHomeComponent,
        TransactionListComponent,
        TransactionListNoAccountsComponent,
        TransactionHeaderComponent,
        TransactionFooterComponent,
        AccountsDetailComponent,
        TransactionComponent,
        TransactionAssignmentComponent,
        CategoryDisplayPipe,
        AccountSelectDropdownComponent,
        PayeeSelectDropdownComponent,
        TransactionDeleteModalComponent,
        TransactionEditComponent,
        TransactionDisplayComponent,
        TransactionActionsComponent,
        TransactionCreateComponent
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
