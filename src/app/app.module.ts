import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./core/core.module";
import { AppComponent } from "./core/components/app.component";
import { SharedModule } from "./shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
    imports: [
        HttpClientModule,
        CoreModule,
        SharedModule,
        StoreModule.forRoot(reducers, {metaReducers}),
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
    ]
})
export class AppModule {

}
