import * as _ from "lodash";
import { Observable } from "rxjs";
import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";

import { EnvelopeModel, EnvelopeCategoryModel } from "../../../core/models/index";
import { TransactionModel, AccountModel } from "../../models/index";
import { IAccountsState, getAccounts } from "../../../core/reducers/accounts.reducer";
import { TransactionsActionTypes, HideCreateTransactionAction, CreateTransactionAction } from "../../../core/actions/transactions.actions";
import { getAllEnvelopes } from "../../../core/reducers/envelopes.reducer";
import { getIsCreating } from "../../../core/reducers/transactions.reducer";
import { TransactionAssignmentModel } from "../../models/transaction.assignment.model";

@Component({
  selector: 'moneteer-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.scss']
})
export class TransactionCreateComponent implements OnInit {

    public transaction: TransactionModel;
    @Input() public currentAccountId: string;

    public get inflow(): number {
        return this.transaction.inflow;
    }
    public set inflow(newValue: number) {
        this.transaction.inflow = newValue;
        if (newValue > 0) {
            this.outflow = 0;
        }
        if (this.transaction.assignments.length === 1) {
            this.transaction.assignments[0].inflow = newValue;
        }
    }

    public get outflow(): number {
        return this.transaction.outflow;
    }
    public set outflow(newValue: number) {
        this.transaction.outflow = newValue;
        if (newValue > 0) {
            this.inflow = 0;
        }
        if (this.transaction.assignments.length === 1) {
            this.transaction.assignments[0].outflow = newValue;
        }
    }

    public isBusy$: Observable<boolean>;
    public accounts$: Observable<Array<AccountModel>>;
    public envelopes$: Observable<Array<EnvelopeModel>>;

    constructor(
        private store: Store<IAccountsState>,
        private actions$: Actions) {

    }

    public ngOnInit(): void {
        this.accounts$ = this.store.select(getAccounts);
        this.envelopes$ = this.store.select(getAllEnvelopes);
        this.isBusy$ = this.store.select(getIsCreating);

        this.resetTransaction();

        this.actions$.pipe(
            ofType(TransactionsActionTypes.CreateTransactionSuccess)
        ).subscribe(() => this.resetTransaction());

        const splitMaster: EnvelopeCategoryModel = new EnvelopeCategoryModel("SplitMaster");
        const splitChild: EnvelopeModel = new EnvelopeModel("Multiple Categories");
        splitChild.id = "SplitCategory";
        splitChild.envelopeCategory = splitMaster;
    }

    public get inUseEnvelopeIds(): string[] {
        return this.transaction.assignments.filter(a => a.envelope).map(a => a.envelope!.id);
    }

    public onAllowMultiple(): void {
        this.transaction.assignments.push(new TransactionAssignmentModel());
    }

    public onAssignmentDelete(assignment: TransactionAssignmentModel): void {
        if (this.transaction.assignments.length <= 1) return;

        const index = this.transaction.assignments.indexOf(assignment);

        if (index < 0) return;

        this.transaction.assignments.splice(index, 1);
    }

    public addEnvelope() {
        this.transaction.assignments.push(new TransactionAssignmentModel());
    }

    public resetTransaction(): void {
        this.transaction = new TransactionModel();
        this.transaction.date = new Date();
        this.transaction.assignments = [new TransactionAssignmentModel()];
    }

    public canCreate(): boolean {
        return this.transaction.date &&
               this.transaction.account &&
               this.transaction.assignments.length > 0 &&
               ((this.inflow > 0 && this.outflow === 0) || (this.inflow === 0 && this.outflow > 0));
    }

    public cancel(): void {
        this.store.dispatch(new HideCreateTransactionAction());
    }

    public create(): void {
        if (this.currentAccountId) {
            this.transaction.account = new AccountModel();
            this.transaction.account.id = this.currentAccountId;
        }

        this.store.dispatch(new CreateTransactionAction({transaction: this.transaction}));
    }
}
