import { EnvelopeModel } from "./";

export class PayeeModel {
    public id: string | null;
    public budgetId: string;
    public lastEnvelope: EnvelopeModel;
    
    constructor(public name: string = "") {

    }
}
