import { NgModule } from "@angular/core";
import { DatePipe, CommonModule } from "@angular/common";
import { LoadingComponent, TypeAheadComponent, CurrencyEditComponent, DropdownComponent } from "./components";
import { CustomDatePipe } from "./pipes/date.pipe";
import { BudgetCurrencyPipe } from "./pipes/budget.currency.pipe";
import { HttpModule } from "@angular/http";

import { FormsModule } from "@angular/forms";
import { NgPipesModule } from "ngx-pipes";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { NavComponent } from "./components/nav/nav.component";
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        NgPipesModule
    ],
    exports: [
        CustomDatePipe,
        BudgetCurrencyPipe,
        NgPipesModule,
        LoadingComponent,
        TypeAheadComponent,
        CurrencyEditComponent,
        NavComponent,
        DropdownComponent,
        ModalComponent,
        CurrencyMaskModule,
        FormsModule,
        CommonModule
    ],
    providers: [
        DatePipe
    ],
    declarations: [
        CustomDatePipe,
        BudgetCurrencyPipe,
        LoadingComponent,
        TypeAheadComponent,
        CurrencyEditComponent,
        DropdownComponent,
        NavComponent,
        ModalComponent
    ]
})
export class SharedModule {
}
