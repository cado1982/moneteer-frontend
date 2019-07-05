import { NgModule } from "@angular/core";

import { SharedModule } from "./../shared/shared.module";
import { EnvelopesHomeComponent, EnvelopesCategoriesComponent,
         EnvelopeComponent,
         EnvelopesHeaderComponent, EnvelopesHeaderStatsComponent, EnvelopesCategoryComponent,
         EnvelopesColumnHeaderComponent, EnvelopesCategoryHeaderComponent,
         EnvelopesHeaderStatsAvailableComponent,
         EnvelopesMonthCategoryCreateComponent,
         EnvelopesCategoryCreateComponent} from "./components";
import { EnvelopesRoutingModule } from "./envelopes.routing.module";
import { EnvelopeDetailsComponent } from './components/envelope-details/envelope-details.component';
import { EnvelopeDetailsHeaderComponent } from './components/envelope-details-header/envelope-details-header.component';
import { EnvelopeDetailsBodyComponent } from './components/envelope-details-body/envelope-details-body.component';
import { EnvelopeDetailsBodyStatsComponent } from './components/envelope-details-body-stats/envelope-details-body-stats.component';
import { EnvelopeDetailsBodyActionsComponent } from './components/envelope-details-body-actions/envelope-details-body-actions.component';

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
        EnvelopeDetailsHeaderComponent,
        EnvelopeDetailsBodyComponent,
        EnvelopeDetailsBodyStatsComponent,
        EnvelopeDetailsBodyActionsComponent
    ],
    imports: [
        EnvelopesRoutingModule,
        SharedModule
    ],
})
export class EnvelopesModule {
}
