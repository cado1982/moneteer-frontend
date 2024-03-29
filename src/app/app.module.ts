import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./core/core.module";
import { AppComponent } from "./core/components/app.component";
import { SharedModule } from "./shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { RouterLinkDirectiveStub } from "./testing/router-link-directive.stub";
import { ErrorModalComponent } from "./core/components/error-modal/error.modal.component";
import localeEn from "@angular/common/locales/en";
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEn);

@NgModule({
    imports: [
        HttpClientModule,
        CoreModule,
        SharedModule,
        StoreModule.forRoot(reducers, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        StoreDevtoolsModule.instrument({
            name: "Moneteer",
            logOnly: environment.production
        }),
        EffectsModule.forRoot([])
    ],
    providers: [
        HttpClientModule,
        { provide: LOCALE_ID, useValue: "en-GB" }
    ],
    bootstrap: [
        AppComponent
    ],
    declarations: [
        RouterLinkDirectiveStub
    ],
    entryComponents: [
        ErrorModalComponent
    ]
})
export class AppModule {

}
