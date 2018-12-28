import { EnvelopeModel } from "./";

export class PayeeModel {
    public id: string;
    public budgetId: string;
    public lastEnvelope: EnvelopeModel;
    
    constructor(public name: string = "") {

    }
}
