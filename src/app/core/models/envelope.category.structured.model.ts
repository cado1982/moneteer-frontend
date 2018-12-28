import { EnvelopeModel, EnvelopeCategoryModel } from "./";

export class EnvelopeCategoryStructuredModel {
    constructor(
        public envelopeCategory: EnvelopeCategoryModel,
        public envelopes: EnvelopeModel[]) {

    }
}
