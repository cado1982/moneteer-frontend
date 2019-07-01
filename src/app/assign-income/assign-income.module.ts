import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignIncomeRoutingModule } from './assign-income-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderProgressComponent } from './components/header-progress/header-progress.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { EnvelopeListComponent } from './components/envelope-list/envelope-list.component';
import { EnvelopeDetailsComponent } from './components/envelope-details/envelope-details.component';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        HeaderProgressComponent,
        WorkspaceComponent,
        EnvelopeListComponent,
        EnvelopeDetailsComponent
    ],
    imports: [
        CommonModule,
        AssignIncomeRoutingModule
    ]
})
export class AssignIncomeModule { }
