import { EnvelopeCategoryModel } from "./";

export class EnvelopeModel {
    public id: string;
    public envelopeCategory: EnvelopeCategoryModel;
    public isHidden: boolean;
    public balance: number;
    public spendingLast30Days: number;
    
    constructor(public name: string = "") {
        
    }
}
