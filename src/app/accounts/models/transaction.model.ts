import { AccountModel } from "./account.model";
import { EnvelopeModel, PayeeModel } from "../../core/models/index";
import { TransactionAssignmentModel } from "./transaction.assignment.model";

export class TransactionModel {
    public id: string;
    public account: AccountModel;
    public payee: PayeeModel | undefined;
    public targetAccount: AccountModel | undefined;
    public date: Date;
    public description: string;
    public isCleared: boolean;
    public isReconciled: boolean;
    public assignments: Array<TransactionAssignmentModel>;

    constructor() {
        if (!this.id) {
            this.id = "00000000-0000-0000-0000-000000000000";
        }
        this.assignments = [];
    }
}