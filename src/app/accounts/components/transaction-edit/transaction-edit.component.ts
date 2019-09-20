import * as _ from "lodash";
import { Observable } from "rxjs";

import { EnvelopeModel, PayeeModel, EnvelopeCategoryModel, GuidModel } from "../../../core/models/index";
import { TransactionModel, AccountModel } from "../../models/index";
import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAccountsState, getAccounts } from "../../../core/reducers/accounts.reducer";
import { UpdateTransactionAction, SetTransactionClearedAction, SelectTransactionAction, DeselectTransactionAction, TransactionsActionTypes, UpdateTransactionSuccessAction, HideCreateTransactionAction, CreateTransactionAction } from "../../../core/actions/transactions.actions";
import { getAllEnvelopes } from "../../../core/reducers/envelopes.reducer";
import { getIsCreating } from "../../../core/reducers/transactions.reducer";
import { OnChanges } from "@angular/core";
import { SimpleChanges } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import { TransactionAssignmentModel } from "../../models/transaction.assignment.model";

@Component({
    selector: 'moneteer-transaction-edit',
    templateUrl: './transaction-edit.component.html',
    styleUrls: ['./transaction-edit.component.scss', './../../styles/transaction.scss']
})
export class TransactionEditComponent implements OnInit, OnChanges {

    @Input() public transaction: TransactionModel;
    @Input() public currentAccountId: string;

    public date: Date;
    public account: AccountModel;
    public description: string;
    public isCleared: boolean;
    public assignments: TransactionAssignmentModel[] = [new TransactionAssignmentModel()];

    public get inflow(): number {
        return this.assignments.reduce((total, a) => total += a.inflow, 0);
    }
    public set inflow(newValue: number) {
        this.assignments[0].inflow = newValue;
        if (newValue > 0) {
            this.assignments[0].outflow = 0;
        }
    }

    public get outflow(): number {
        return this.assignments.reduce((total, a) => total += a.outflow, 0);
    }
    public set outflow(newValue: number) {
        this.assignments[0].outflow = newValue;
        if (newValue > 0) {
            this.assignments[0].inflow = 0;
        }
    }

    public get inUseEnvelopeIds(): string[] {
        return this.assignments.filter(a => a.envelope).map(a => a.envelope!.id);
    }

    public addEnvelope() {
        this.assignments.push(new TransactionAssignmentModel());
    }

    public onAssignmentDelete(assignment: TransactionAssignmentModel): void {
        if (this.assignments.length <= 1) return;

        const index = this.assignments.indexOf(assignment);

        if (index < 0) return;

        this.assignments.splice(index, 1);
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
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.transaction) {
            this.date = this.transaction.date;
            this.description = this.transaction.description;
            this.account = this.transaction.account;
            this.isCleared = this.transaction.isCleared;
            this.assignments = [];
            this.transaction.assignments.forEach(assignment => {
                let newAssignment = new TransactionAssignmentModel();
                newAssignment.id = assignment.id;
                newAssignment.inflow = assignment.inflow;
                newAssignment.outflow = assignment.outflow;
                newAssignment.envelope = assignment.envelope;
                this.assignments.push(newAssignment);
            });
        }
    }

    // public click(): void {
    //     if (this.isChecked && !this.isEditing) {
    //         this.isEditing = true;
    //     } else if (!this.isChecked) {
    //         this.isChecked = true;
    //     }
    // }
}
