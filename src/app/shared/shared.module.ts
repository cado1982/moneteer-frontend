import { NgModule } from "@angular/core";
import { DatePipe, CommonModule } from "@angular/common";
import { LoadingComponent, TypeAheadComponent, CurrencyEditComponent, DropdownComponent } from "./components";
import { CustomDatePipe } from "./pipes/date.pipe";
import { BudgetCurrencyPipe } from "./pipes/budget.currency.pipe";
import { ClarityModule, ClrFormsModule } from "@clr/angular";

import { FormsModule } from "@angular/forms";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { NavComponent } from "./components/nav/nav.component";
import { PairsPipe } from "./pipes/pairs.pipe";
import { GroupByPipe } from "./pipes/group.by.pipe";
import { FilterByPipe } from "./pipes/filter.by.pipe";
import { EnvelopeCategorySelectDropdownComponent } from './components/envelope-category-select-dropdown/envelope-category-select-dropdown.component';

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ClrFormsModule,
        FormsModule
    ],
    exports: [
        CustomDatePipe,
        BudgetCurrencyPipe,
        PairsPipe,
        GroupByPipe,
        FilterByPipe,
        ClarityModule,
        ClrFormsModule,
        LoadingComponent,
        TypeAheadComponent,
        CurrencyEditComponent,
        NavComponent,
        DropdownComponent,
        CurrencyMaskModule,
        FormsModule,
        CommonModule,
        EnvelopeCategorySelectDropdownComponent
    ],
    providers: [
        DatePipe
    ],
    declarations: [
        CustomDatePipe,
        BudgetCurrencyPipe,
        PairsPipe,
        GroupByPipe,
        FilterByPipe,
        LoadingComponent,
        TypeAheadComponent,
        CurrencyEditComponent,
        DropdownComponent,
        NavComponent,
        EnvelopeCategorySelectDropdownComponent
    ]
})
export class SharedModule {
}
