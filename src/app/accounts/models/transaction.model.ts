
import { AccountModel } from "./account.model";
import { EnvelopeModel, PayeeModel } from "../../core/models/index";

export class TransactionModel {
    public id: string;
    public account: AccountModel;
    public inflow: number;
    public outflow: number;
    public payee: PayeeModel;
    public targetAccount: AccountModel;
    public date: Date;
    public description: string;
    public envelope: EnvelopeModel | undefined;
    public isCleared: boolean;
    public isReconciled: boolean;
    public assignments: Array<TransactionAssignmentModel>;

    constructor() {
        if (!this.id) {
            this.id = "00000000-0000-0000-0000-000000000000";
        }
    }
}

export class TransactionAssignmentModel {
    public id: string;
    public inflow: number;
    public outflow: number;
    public envelope: EnvelopeModel;
}
