import { Spectator, createTestComponentFactory } from '@netbasal/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { ErrorAlertComponent } from 'src/app/shared/components/error-alert/error-alert.component';
import { AppComponent } from './app.component';
import { LoadingBarComponent } from '@ngx-loading-bar/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorModalComponent } from './error-modal/error.modal.component';

describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;
    const createComponent = createTestComponentFactory({
        component: AppComponent,
        imports: [
            RouterTestingModule
        ],
        declarations: [
            MockComponent(ErrorAlertComponent),
            MockComponent(LoadingBarComponent),
            MockComponent(ErrorModalComponent)
        ],
    });

    beforeEach(() => spectator = createComponent());


    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});

