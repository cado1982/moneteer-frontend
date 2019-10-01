import { TransactionAssignmentModel } from "src/app/accounts/models/transaction.assignment.model";

export class TransactionCreateModel {
    public accountId: string;
    public isCleared: boolean;
    public date: Date;
    public description: string;
    public assignments: TransactionAssignmentModel[];
}
