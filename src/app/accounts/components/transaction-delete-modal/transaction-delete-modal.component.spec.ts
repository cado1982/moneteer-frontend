import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDeleteModalComponent } from './transaction-delete-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { ITransactionsState } from 'src/app/core/reducers/transactions.reducer';
import { RouterTestingModule } from '@angular/router/testing';

describe('TransactionDeleteModalComponent', () => {
    let component: TransactionDeleteModalComponent;
    let fixture: ComponentFixture<TransactionDeleteModalComponent>;
    let actions$: Observable<Action>;
    let initialStoreState: ITransactionsState;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TransactionDeleteModalComponent],
            providers: [
                NgbActiveModal,
                provideMockActions(() => actions$),
                provideMockStore({ initialState: initialStoreState })
            ],
            imports: [RouterTestingModule]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TransactionDeleteModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
