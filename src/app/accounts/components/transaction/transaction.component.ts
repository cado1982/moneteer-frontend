import * as _ from "lodash";
import { Observable } from "rxjs";

import { EnvelopeModel, PayeeModel, EnvelopeCategoryModel, GuidModel } from "../../../core/models/index";
import { TransactionModel, AccountModel, TransactionAssignmentModel } from "../../models/index";
import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { IAccountsState, getAccounts } from "../../../core/reducers/accounts.reducer";
import { UpdateTransactionAction, SetTransactionClearedAction, SelectTransactionAction, DeselectTransactionAction } from "../../../core/actions/transactions.actions";
import { getEnvelopes } from "../../../core/reducers/envelopes.reducer";
import { getIsCreating } from "../../../core/reducers/transactions.reducer";
import { OnChanges } from "@angular/core";
import { SimpleChanges } from "@angular/core";
import { getPayees } from "../../../core/reducers/transactions.reducer";

@Component({
    selector: "moneteer-transaction",
    templateUrl: "./transaction.component.html",
    styleUrls: ["./transaction.component.scss"],
    host: {
        "[class.selected]": "this.isChecked",
        "[class.editing]": "this.isEditing",
    }
})
export class TransactionComponent implements OnInit, OnChanges {
    
    @Input() public transaction: TransactionModel;
    @Input() public currentAccountId: string;

    @Output() public editing: EventEmitter<string> = new EventEmitter<string>();

    // Individual transaction properties
    public date: Date = new Date();
    public account: AccountModel = new AccountModel();
    public payee: PayeeModel = new PayeeModel();
    public description: string = "";
    public envelope: EnvelopeModel | undefined;
    public outflow: number = 0;
    public inflow: number = 0;
    public isCleared: boolean = false;
    public assignments: TransactionAssignmentModel[] = [];

    private _isChecked: boolean = false;
    public get isChecked(): boolean {
        return this._isChecked;
    }
    public set isChecked(value: boolean) {
        if (this._isChecked === value) return;

        this._isChecked = value;
        if (value) {
            this.store.dispatch(new SelectTransactionAction({transactionId: this.transaction.id}))
        } else {
            this.isEditing = false;
            this.store.dispatch(new DeselectTransactionAction({transactionId: this.transaction.id}))
        }
    }

    private _isEditing: boolean = false;
    public get isEditing(): boolean {
        return this._isEditing;
    }
    public set isEditing(value: boolean) {
        if (this._isEditing === null) return;

        this._isEditing = value;
        if (value) {
            if (this.transaction) {
                this.editing.emit(this.transaction.id)
            }
        } else {
            this.isChecked = false;
        };
    }
    
    public isBusy$: Observable<boolean>;

    public accounts$: Observable<Array<AccountModel>>;
    public payees$: Observable<Array<PayeeModel>>;
    public envelopes$: Observable<Array<EnvelopeModel>>;

    constructor(
        private store: Store<IAccountsState>) {

    }

    public ngOnInit(): void {
        this.accounts$ = this.store.select(getAccounts);
        this.envelopes$ = this.store.select(getEnvelopes);
        this.payees$ = this.store.select(getPayees);
        this.isBusy$ = this.store.select(getIsCreating);

        const splitMaster: EnvelopeCategoryModel = new EnvelopeCategoryModel("SplitMaster");
        const splitChild: EnvelopeModel = new EnvelopeModel("Multiple Categories");
        splitChild.id = "SplitCategory";
        splitChild.envelopeCategory = splitMaster;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.transaction && changes.transaction.currentValue) {
            this.date = this.transaction.date;
            this.account = this.transaction.account;
            this.payee = this.transaction.payee;
            this.description = this.transaction.description;
            this.envelope = this.transaction.envelope;
            this.outflow = this.transaction.outflow;
            this.inflow = this.transaction.inflow;
            this.isCleared = this.transaction.isCleared;
            this.assignments = this.transaction.assignments;
        }
    }

    public setCleared(isCleared: boolean): void {
        if (this.isEditing || !this.transaction.id || this.transaction.id === GuidModel.empty) {
            return;
        }

        this.store.dispatch(new SetTransactionClearedAction({transactionId: this.transaction.id, isCleared}));
    }

    public onSelectedEnvelopeChange(envelope: EnvelopeModel): void {
        if (envelope.id === "SplitCategory") {
            this.assignments = [new TransactionAssignmentModel(), new TransactionAssignmentModel()];
        } else {
            this.assignments = [];
        }
    }





    public canSave(): boolean {
        return this.date &&
               this.account &&
               (this.envelope || this.inflow > 0) &&
               (this.inflow > 0 || this.outflow > 0);
    }

    public click(): void {
        if (this.isChecked && !this.isEditing) {
            this.isEditing = true;
        } else if (!this.isChecked) {
            this.isChecked = true;
        }
    }

    public endEdit(): void {
        this.isEditing = false;
    }

    public save(): void {
        if (this.currentAccountId) {
            this.account = new AccountModel();
            this.account.id = this.currentAccountId;
        }

        if (this.envelope && this.envelope.id !== "SplitCategory") {
            const assignment: TransactionAssignmentModel = new TransactionAssignmentModel();
            assignment.envelope = this.envelope;
            assignment.inflow = this.inflow;
            assignment.outflow = this.outflow;
            this.assignments = [assignment];
        }

        const newTransaction = new TransactionModel();
        newTransaction.date = this.date;
        newTransaction.account = this.account;
        newTransaction.payee = this.payee;
        newTransaction.description = this.description;
        newTransaction.envelope = this.envelope;
        newTransaction.outflow = this.outflow;
        newTransaction.inflow = this.inflow;
        newTransaction.isCleared = this.isCleared;
        newTransaction.assignments = this.assignments;
        newTransaction.id = this.transaction.id;

        this.store.dispatch(new UpdateTransactionAction({transaction: newTransaction}));
    }
}
