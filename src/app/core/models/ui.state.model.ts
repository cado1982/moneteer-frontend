import { BudgetModel } from "./budget.model";

export class UiStateModel {
    constructor(
        public showCreateTransaction: boolean,
        public showCreateAccount: boolean,
        public showCreateBudget: boolean,
        public showDeleteBudget: boolean,
        public budgetToDelete: BudgetModel,
        public isDeletingBudget: boolean,
        public isCreatingBudget: boolean,
        public isCreatingAccount: boolean
    ) { }
}