import { NgModule } from "@angular/core";
import { DatePipe, CommonModule } from "@angular/common";
import { LoadingComponent, TypeAheadComponent, DropdownComponent } from "./components";
import { CustomDatePipe } from "./pipes/date.pipe";
import { BudgetCurrencyPipe } from "./pipes/budget.currency.pipe";
import { NgbModule, NgbActiveModal, NgbAlertModule, NgbModalModule, NgbDropdownModule, NgbDatepickerModule, NgbDateNativeAdapter, NgbDateAdapter, NgbProgressbarModule } from "@ng-bootstrap/ng-bootstrap";

import { FormsModule } from "@angular/forms";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { NavComponent } from "./components/nav/nav.component";
import { PairsPipe } from "./pipes/pairs.pipe";
import { GroupByPipe } from "./pipes/group.by.pipe";
import { FilterByPipe } from "./pipes/filter.by.pipe";
import { EnvelopeCategorySelectDropdownComponent } from './components/envelope-category-select-dropdown/envelope-category-select-dropdown.component';
import { CurrencyInputDirective } from './directives/currency-input.directive';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';

@NgModule({
    imports: [
        CommonModule,
        NgbAlertModule,
        NgbModalModule,
        NgbDropdownModule,
        NgbDatepickerModule,
        NgbProgressbarModule,
        FormsModule
    ],
    exports: [
        CustomDatePipe,
        BudgetCurrencyPipe,
        PairsPipe,
        GroupByPipe,
        FilterByPipe,
        NgbAlertModule,
        NgbModalModule,
        NgbDropdownModule,
        NgbDatepickerModule,
        NgbProgressbarModule,
        LoadingComponent,
        TypeAheadComponent,
        NavComponent,
        DropdownComponent,
        CurrencyMaskModule,
        FormsModule,
        CommonModule,
        EnvelopeCategorySelectDropdownComponent,
        CurrencyInputDirective,
        DropdownListComponent
    ],
    providers: [
        DatePipe,
        NgbActiveModal ,
        {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}
    ],
    declarations: [
        CustomDatePipe,
        BudgetCurrencyPipe,
        PairsPipe,
        GroupByPipe,
        FilterByPipe,
        LoadingComponent,
        TypeAheadComponent,
        DropdownComponent,
        NavComponent,
        EnvelopeCategorySelectDropdownComponent,
        CurrencyInputDirective,
        DropdownListComponent
    ]
})
export class SharedModule {
}
