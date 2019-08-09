import { NgModule } from "@angular/core";

import { SharedModule } from "./../shared/shared.module";
import { EnvelopesHomeComponent, EnvelopesCategoriesComponent,
         EnvelopeComponent,
         EnvelopesHeaderComponent, EnvelopesHeaderStatsComponent, EnvelopesCategoryComponent,
         EnvelopesColumnHeaderComponent, EnvelopesCategoryHeaderComponent,
         EnvelopesHeaderStatsAvailableComponent} from "./components";
import { EnvelopesRoutingModule } from "./envelopes.routing.module";
import { EnvelopeDetailsComponent } from './components/envelope-details/envelope-details.component';
import { EnvelopeDetailsHeaderComponent } from './components/envelope-details-header/envelope-details-header.component';
import { EnvelopeDetailsBodyComponent } from './components/envelope-details-body/envelope-details-body.component';
import { EnvelopeDetailsBodyStatsComponent } from './components/envelope-details-body-stats/envelope-details-body-stats.component';
import { EnvelopeDetailsBodyActionsComponent } from './components/envelope-details-body-actions/envelope-details-body-actions.component';
import { EnvelopesBodyComponent } from './components/envelopes-body/envelopes-body.component';
import { EnvelopesCategoriesListComponent } from './components/envelopes-categories-list/envelopes-categories-list.component';
import { EnvelopesAddModalComponent } from './components/envelopes-add-modal/envelopes-add-modal.component';
import { EnvelopeDetailsBodyRecentTransactionsComponent } from './components/envelope-details-body-recent-transactions/envelope-details-body-recent-transactions.component';
import { EnvelopeAddCategoryModalComponent } from './components/envelope-add-category-modal/envelope-add-category-modal.component';

@NgModule({
    declarations: [
        EnvelopesHomeComponent,
        EnvelopesHeaderComponent,
        EnvelopesHeaderStatsComponent,
        EnvelopesColumnHeaderComponent,
        EnvelopeComponent,
        EnvelopesCategoriesComponent,
        EnvelopesHeaderStatsAvailableComponent,
        EnvelopesCategoryComponent,
        EnvelopesCategoryHeaderComponent,
        EnvelopeDetailsComponent,
        EnvelopeDetailsHeaderComponent,
        EnvelopeDetailsBodyComponent,
        EnvelopeDetailsBodyStatsComponent,
        EnvelopeDetailsBodyActionsComponent,
        EnvelopesBodyComponent,
        EnvelopesCategoriesListComponent,
        EnvelopesAddModalComponent,
        EnvelopeDetailsBodyRecentTransactionsComponent,
        EnvelopeAddCategoryModalComponent
    ],
    imports: [
        EnvelopesRoutingModule,
        SharedModule
    ],
    entryComponents: [
        EnvelopeAddCategoryModalComponent,
        EnvelopesAddModalComponent
    ]
})
export class EnvelopesModule {
}
