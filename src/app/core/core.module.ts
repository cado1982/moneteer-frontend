import { NgModule, Optional, SkipSelf } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { throwIfAlreadyLoaded } from "./module.import.guard";
import { TokenInterceptor } from "./interceptors/token.interceptor";
import { UnauthorizedInterceptor } from "./interceptors/unauthorized.interceptor";
import { AppComponent } from "./components/app.component";
import { ErrorModalComponent } from "./components/error-modal/error.modal.component";
import { LoadingSpinnerService, MediaQueryService, NotificationsService,
         AuthService, TransactionService, PayeeService, EnvelopesService,
         BudgetService, AccountService, ModalService } from "./services";
import { AppRoutingModule } from "../routing/app-routing.module";
import { AuthGuard } from "./guards/auth.guard";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { SharedModule } from "../shared/shared.module";
import { AuthCallbackComponent } from "./components/auth-callback/auth-callback.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers } from "./reducers";
import { AccountsEffects } from "./effects/accounts.effects";
import { BudgetsEffects } from "./effects/budgets.effects";
import { TransactionsEffects } from "./effects/transactions.effects";
import { EnvelopesEffects } from "./effects/envelopes.effects";
import { ErrorHandler } from "@angular/core";
import { ErrorsHandler } from "./errors.handler";
import { RetryInterceptor } from "./interceptors/retry.interceptor";
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
import { LoadingBarModule } from "@ngx-loading-bar/core";
import { PaymentRequiredInterceptor } from "./interceptors/payment-required.interceptor";
import { PaymentRequiredComponent } from './components/payment-required/payment-required.component';

@NgModule({
    imports: [
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        LoadingBarRouterModule,
        LoadingBarModule,
        StoreModule.forFeature("core", reducers),
        EffectsModule.forFeature([AccountsEffects, BudgetsEffects, TransactionsEffects, EnvelopesEffects])
    ],
    exports: [
        HttpClientModule,
        FormsModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: PaymentRequiredInterceptor, multi: true },
        { provide: ErrorHandler, useClass: ErrorsHandler },
        LoadingSpinnerService,
        MediaQueryService,
        NotificationsService,
        AuthGuard,
        AuthService,
        AccountService,
        BudgetService,
        EnvelopesService,
        PayeeService,
        TransactionService,
        ModalService
    ],
    declarations: [
        AppComponent,
        ErrorModalComponent,
        AuthCallbackComponent,
        PaymentRequiredComponent
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, "CoreModule");
    }
}

