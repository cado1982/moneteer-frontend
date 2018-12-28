export class CurrencyFormat {
    constructor(
        public thousandsSeparator: string,
        public decimalSeparator: string,
        public decimalPlaces: number) {
    
    }
}

export const CURRENCY_FORMATS: Array<CurrencyFormat> = [
    new CurrencyFormat(',', '.', 2),
    new CurrencyFormat('.', ',', 2),
    new CurrencyFormat(' ', '.', 2),
    new CurrencyFormat(' ', ',', 2),
    new CurrencyFormat('' , '.', 2),
    new CurrencyFormat('', ',', 2),
    new CurrencyFormat(',', '.',0),
    new CurrencyFormat('.', ',',0),
    new CurrencyFormat(' ', '.',0),
    new CurrencyFormat(' ', ',',0),
    new CurrencyFormat('', '.', 0),
    new CurrencyFormat('', ',', 0),
]