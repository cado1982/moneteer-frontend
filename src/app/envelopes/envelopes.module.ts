import { NgModule } from "@angular/core";

import { SharedModule } from "./../shared/shared.module";
import { EnvelopesHomeComponent, EnvelopesCategoriesComponent,
         EnvelopeComponent,
         EnvelopesHeaderComponent, EnvelopesHeaderStatsComponent, EnvelopesCategoryComponent,
         EnvelopesColumnHeaderComponent, EnvelopesCategoryHeaderComponent,
         EnvelopesHeaderStatsAvailableComponent,
         EnvelopesMonthCategoryCreateComponent,
         EnvelopesCategoryCreateComponent,
         EnvelopesAssignIncomeComponent} from "./components";
import { EnvelopesRoutingModule } from "./envelopes.routing.module";
import { EnvelopeDetailsComponent } from './components/envelope-details/envelope-details.component';

@NgModule({
    declarations: [
        EnvelopesHomeComponent,
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
        EnvelopeDetailsComponent,
        EnvelopesAssignIncomeComponent
    ],
    imports: [
        EnvelopesRoutingModule,
        SharedModule
    ],
})
export class EnvelopesModule {
}
