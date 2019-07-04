import { Pipe, PipeTransform, Injectable } from "@angular/core";

import { number_format } from "./../../../lib/number.format";
import { CurrencyFormat, Currency } from "./../../static";
import { SymbolLocation } from "../../core/models/index";
import { Store } from "@ngrx/store";
import { IBudgetsState, getActiveBudget } from "src/app/core/reducers/budget.reducer";
import { first, map } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable()
@Pipe({name: "budgetCurrency"})
export class BudgetCurrencyPipe implements PipeTransform {

    constructor(private store: Store<IBudgetsState>) { }

    public transform(value: number, allowZeros: boolean = false, currencyFormat: CurrencyFormat,
                     currencySymbolLocation: SymbolLocation, currency: Currency): Observable<string> {
        if (!allowZeros && value === 0) {
            return of("");
        }

        return this.store.select(getActiveBudget).pipe(
            first(),
            map(activeBudget => {
                if (activeBudget) {
                    if (!currencyFormat) {
                        currencyFormat = activeBudget.currencyFormat;
                    }
                    if (!currencySymbolLocation) {
                        currencySymbolLocation = activeBudget.currencySymbolLocation;
                    }
                    if (!currency) {
                        currency = activeBudget.currency;
                    }
                }
        
                if (currencyFormat) {
                    const formattedNumber: string = number_format(value, currencyFormat.decimalPlaces, currencyFormat.decimalSeparator,
                                                          currencyFormat.thousandsSeparator);
        
                    if (currency) {
                        if (currencySymbolLocation === SymbolLocation.Before) {
                            return currency.symbol + formattedNumber;
                        } else if (currencySymbolLocation === SymbolLocation.After) {
                            return formattedNumber + currency.symbol;
                        } else {
                            return formattedNumber;
                        }
                    } else {
                        return formattedNumber;
                    }
                } else {
                    return number_format(value, 2, ".", ",");
                }
            }
        ));

    }
}
