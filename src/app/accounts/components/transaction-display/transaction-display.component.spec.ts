import { TransactionDisplayComponent } from './transaction-display.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockPipe } from 'ng-mocks';
import { BudgetCurrencyPipe } from 'src/app/shared/pipes/budget.currency.pipe';
import { provideMockStore } from '@ngrx/store/testing';
import { TransactionModel } from '../../models';
import { TransactionAssignmentModel } from '../../models/transaction.assignment.model';
import { EnvelopeModel } from 'src/app/core/models';

describe('TransactionDisplayComponent', () => {
    let spectator: Spectator<TransactionDisplayComponent>;
    const createComponent = createComponentFactory({
        component: TransactionDisplayComponent,
        declarations: [
            MockPipe(BudgetCurrencyPipe)
        ],
        providers: [
            provideMockStore({ initialState: {} })
        ],
    });

    beforeEach(() => {
        let transaction = new TransactionModel();
        let assignment = new TransactionAssignmentModel();
        assignment.envelope = new EnvelopeModel();
        transaction.assignments = [
            assignment
        ];
        spectator = createComponent({
            props: {
                transaction: transaction
            }
        });
    });

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
