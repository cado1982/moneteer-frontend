import { NgModule } from "@angular/core";

import { SharedModule } from "./../shared/shared.module";
import { AccountsHomeComponent, TransactionListComponent, TransactionCreateInflowComponent,
         TransactionCreateOutflowComponent,
         AccountsDetailComponent, TransactionHeaderComponent,
         TransactionFooterComponent, TransactionComponent, TransactionAssignmentComponent } from "./components";
import { CategoryDisplayPipe } from "./directives/category.month.display.pipe";
import { AccountsRoutingModule } from "./accounts.routing.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { BudgetModule } from "../budget/budget.module";
import { AccountSelectDropdownComponent } from './components/account-select-dropdown/account-select-dropdown.component';
import { PayeeSelectDropdownComponent } from './components/payee-select-dropdown/payee-select-dropdown.component';
import { ClrFormsModule, ClarityModule } from "@clr/angular";

@NgModule({
    declarations: [
        AccountsHomeComponent,
        TransactionListComponent,
        TransactionCreateInflowComponent,
        TransactionCreateOutflowComponent,
        TransactionHeaderComponent,
        TransactionFooterComponent,
        AccountsDetailComponent,
        TransactionComponent,
        TransactionAssignmentComponent,
        CategoryDisplayPipe,
        AccountSelectDropdownComponent,
        PayeeSelectDropdownComponent
    ],
    providers: [
        CategoryDisplayPipe
    ],
    imports: [
        AccountsRoutingModule,
        SharedModule,
        ClrFormsModule,
        ClarityModule
    ],
    exports: [
    ]
})
export class AccountsModule {
}
