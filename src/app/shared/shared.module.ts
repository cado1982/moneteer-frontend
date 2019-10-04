import { NgModule } from "@angular/core";
import { DatePipe, CommonModule } from "@angular/common";
import { LoadingComponent, TypeAheadComponent, DropdownComponent } from "./components";
import { CustomDatePipe, WindowRef } from "./pipes/date.pipe";
import { BudgetCurrencyPipe } from "./pipes/budget.currency.pipe";
import { NgbActiveModal, NgbAlertModule, NgbModalModule, NgbDropdownModule,
         NgbDatepickerModule, NgbDateNativeAdapter, NgbDateAdapter, NgbProgressbarModule 
} from "@ng-bootstrap/ng-bootstrap";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavComponent } from "./components/nav/nav.component";
import { PairsPipe } from "./pipes/pairs.pipe";
import { GroupByPipe } from "./pipes/group.by.pipe";
import { FilterByPipe } from "./pipes/filter.by.pipe";
import { EnvelopeCategorySelectDropdownComponent } from './components/envelope-category-select-dropdown/envelope-category-select-dropdown.component';
import { CurrencyInputDirective } from './directives/currency-input.directive';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';
import { ErrorAlertComponent } from './components/error-alert/error-alert.component';
import { EnvelopeSelectDropdownComponent } from "./components/envelope-select-dropdown/envelope.select.dropdown.component";
import { NavTrialStatusComponent } from './components/nav-trial-status/nav-trial-status.component';

@NgModule({
    imports: [
        CommonModule,
        NgbAlertModule,
        NgbModalModule,
        NgbDropdownModule,
        NgbDatepickerModule,
        NgbProgressbarModule,
        FormsModule,
        ReactiveFormsModule
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
        FormsModule,
        CommonModule,
        EnvelopeCategorySelectDropdownComponent,
        CurrencyInputDirective,
        DropdownListComponent,
        ReactiveFormsModule,
        ErrorAlertComponent,
        EnvelopeSelectDropdownComponent
    ],
    providers: [
        DatePipe,
        NgbActiveModal ,
        {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter},
        WindowRef
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
        DropdownListComponent,
        ErrorAlertComponent,
        EnvelopeSelectDropdownComponent,
        NavTrialStatusComponent
    ]
})
export class SharedModule {
}
