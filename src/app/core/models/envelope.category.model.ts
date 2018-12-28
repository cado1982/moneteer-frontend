import { EnvelopeModel } from "./";

export class EnvelopeCategoryModel {
    public id: string;
    public envelopes: Array<EnvelopeModel>;
    public isHidden: boolean;

    constructor(public name: string) {

    }
}
