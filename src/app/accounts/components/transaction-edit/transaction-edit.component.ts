import * as _ from "lodash";
import { Observable } from "rxjs";

import { EnvelopeModel, GuidModel } from "../../../core/models/index";
import { TransactionModel, AccountModel } from "../../models/index";
import { Component, Input, OnInit, ViewChildren, QueryList } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAccountsState, getAccounts } from "../../../core/reducers/accounts.reducer";
import { getAllEnvelopes } from "../../../core/reducers/envelopes.reducer";
import { OnChanges } from "@angular/core";
import { SimpleChanges } from "@angular/core";
import { TransactionAssignmentModel } from "../../models/transaction.assignment.model";
import { TransactionAssignmentComponent } from "../transaction-assignment/transaction.assignment.component";

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

    private assignmentIsValid(assignment: TransactionAssignmentModel): boolean {
        return !!assignment &&
            (assignment.inflow > 0 || assignment.outflow > 0) &&
            !(assignment.inflow > 0 && assignment.outflow > 0) &&
            (!!assignment.envelope && assignment.envelope.id !== GuidModel.empty);
    }

    private allAssignmentsValid(): boolean {
        return this.assignments && 
            this.assignments.length >= 1 &&
            this.assignments.every(a => this.assignmentIsValid(a));
    }

    public transactionIsValid(): boolean {
        const totalTransactionValueIsNotZero = this.inflow !== 0 || this.outflow !== 0;
        const accountNotNull = !!this.account;

        return this.allAssignmentsValid() && totalTransactionValueIsNotZero && accountNotNull;
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

    public getEditedTransaction(): TransactionModel {
        let updatedTransaction = new TransactionModel();
        updatedTransaction.id = this.transaction.id;
        updatedTransaction.date = this.date;
        updatedTransaction.description = this.description;
        updatedTransaction.isCleared = this.isCleared;

        updatedTransaction.account = new AccountModel();

        if (this.currentAccountId) {
            updatedTransaction.account.id = this.currentAccountId;
        } else if (this.account) {
            updatedTransaction.account.id = this.account.id;
        }
        
        updatedTransaction.assignments = [];
        this.assignments.forEach(a => {
            let newAssignment = new TransactionAssignmentModel();
            newAssignment.inflow = a.inflow;
            newAssignment.outflow = a.outflow;
            newAssignment.envelope = a.envelope;
            updatedTransaction.assignments.push(newAssignment);
        })

        return updatedTransaction;
    }

    public accounts$: Observable<Array<AccountModel>>;
    public envelopes$: Observable<Array<EnvelopeModel>>;

    constructor(
        private store: Store<IAccountsState>) {

    }

    public ngOnInit(): void {
        this.accounts$ = this.store.select(getAccounts);
        this.envelopes$ = this.store.select(getAllEnvelopes);
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
}
