import { TransactionCreateComponent } from './transaction-create.component';
import { Spectator, createTestComponentFactory } from '@ngneat/spectator/jest';
import { provideMockStore } from '@ngrx/store/testing';
import { MockComponent } from 'ng-mocks';
import { TransactionEditComponent } from '../transaction-edit/transaction-edit.component';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

describe('TransactionCreateComponent', () => {
    let spectator: Spectator<TransactionCreateComponent>;
    let actions$: Observable<Action>;
    
    const createComponent = createTestComponentFactory({
        component: TransactionCreateComponent,
        declarations: [
            MockComponent(TransactionEditComponent)
        ],
        providers: [
            provideMockStore({initialState: {}}),
            provideMockActions(() => actions$),
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
