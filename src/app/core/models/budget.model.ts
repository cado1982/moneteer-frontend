import { CurrencyFormat, Currency } from "./../../static";
import { SymbolLocation } from "./symbol.location.model";

export class BudgetModel {
    public id: string;

    constructor(
        public name: string,
        public currency: Currency,
        public dateFormat: string,
        public currencyFormat: CurrencyFormat,
        public currencySymbolLocation: SymbolLocation) {

    }
}