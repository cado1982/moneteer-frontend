import { TransactionCreateComponent } from './transaction-create.component';
import { Spectator, createTestComponentFactory } from '@ngneat/spectator/jest';
import { provideMockStore } from '@ngrx/store/testing';
import { MockComponent } from 'ng-mocks';
import { TransactionEditComponent } from '../transaction-edit/transaction-edit.component';

describe('TransactionCreateComponent', () => {
    let spectator: Spectator<TransactionCreateComponent>;
    const createComponent = createTestComponentFactory({
        component: TransactionCreateComponent,
        declarations: [
            MockComponent(TransactionEditComponent)
        ],
        providers: [
            provideMockStore({initialState: {}})
        ]
    });

    beforeEach(() => spectator = createComponent());

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
