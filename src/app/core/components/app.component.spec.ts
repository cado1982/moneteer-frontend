import { Spectator, createTestComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { ErrorAlertComponent } from 'src/app/shared/components/error-alert/error-alert.component';
import { AppComponent } from './app.component';
import { LoadingBarComponent } from '@ngx-loading-bar/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorModalComponent } from './error-modal/error.modal.component';
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;
    let actions$: Observable<Action>;

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
        providers: [
            provideMockStore({ initialState: {} }),
            provideMockActions(() => actions$)
        ]
    });

    beforeEach(() => spectator = createComponent());
                
    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});

