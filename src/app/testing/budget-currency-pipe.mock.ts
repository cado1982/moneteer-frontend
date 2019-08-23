import { Pipe, PipeTransform } from "@angular/core";
import { Observable, of } from "rxjs";
import { CurrencyFormat, Currency } from "../static";
import { SymbolLocation } from "../core/models";

@Pipe({ name: 'budgetCurrency' })
export class MockBudgetCurrencyPipe implements PipeTransform {
    transform(value: number, allowZeros: boolean = false, currencyFormat: CurrencyFormat, currencySymbolLocation: SymbolLocation, currency: Currency): Observable<string> {
        return of("");
    }
}