import { NgModule } from "@angular/core";

import { SharedModule } from "./../shared/shared.module";
import { MonthSelectorComponent, EnvelopesHomeComponent, EnvelopesCategoriesComponent,
         EnvelopeComponent,
         EnvelopesHeaderComponent, EnvelopesHeaderStatsComponent, EnvelopesCategoryComponent,
         EnvelopesColumnHeaderComponent, EnvelopesCategoryHeaderComponent,
         EnvelopesHeaderStatsAvailableComponent,
         EnvelopesMonthCategoryCreateComponent,
         EnvelopesCategoryCreateComponent } from "./components";
import { EnvelopesRoutingModule } from "./envelopes.routing.module";
import { BudgetModule } from "../budget/budget.module";
import { EnvelopeDetailsComponent } from './components/envelope-details/envelope-details.component';

@NgModule({
    declarations: [
        EnvelopesHomeComponent,
        MonthSelectorComponent,
        EnvelopesHeaderComponent,
        EnvelopesHeaderStatsComponent,
        EnvelopesColumnHeaderComponent,
        EnvelopeComponent,
        EnvelopesMonthCategoryCreateComponent,
        EnvelopesCategoryCreateComponent,
        EnvelopesCategoriesComponent,
        EnvelopesHeaderStatsAvailableComponent,
        EnvelopesCategoryComponent,
        EnvelopesCategoryHeaderComponent,
        EnvelopeDetailsComponent
    ],
    imports: [
        EnvelopesRoutingModule,
        SharedModule
    ],
})
export class EnvelopesModule {
}
