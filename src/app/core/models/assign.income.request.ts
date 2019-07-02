import { EnvelopeModel } from "./envelope.model";

export class AssignIncomeRequest {
    constructor(public assignments: AssignIncome[]) {
        
    }
}

export class AssignIncome {
    constructor(
        public envelope: EnvelopeModel,
        public amount: number
    ) { }
}