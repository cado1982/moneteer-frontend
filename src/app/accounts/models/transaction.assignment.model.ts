import { EnvelopeModel, GuidModel } from "src/app/core/models";

export class TransactionAssignmentModel {
    public id: string = GuidModel.empty;
    public inflow: number = 0;
    public outflow: number = 0;
    public envelope: EnvelopeModel | null = null;
}