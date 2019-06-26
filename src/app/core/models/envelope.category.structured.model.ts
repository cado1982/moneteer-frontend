import { EnvelopeCategoryModel } from "./envelope.category.model";
import { EnvelopeModel } from "./envelope.model";

export class EnvelopeCategoryStructuredModel {
    constructor(
        public envelopeCategory: EnvelopeCategoryModel,
        public envelopes: EnvelopeModel[]) {

    }
}
