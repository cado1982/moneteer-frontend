import { Component, forwardRef, Input, ViewChild, ElementRef, ChangeDetectorRef, NgZone } from "@angular/core";


import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";


export const CURRENCY_EDIT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CurrencyEditComponent),
    multi: true
};

@Component({
    selector: "moneteer-currency-input",
    templateUrl: "./currency.edit.component.html",
    styleUrls: ["./currency.edit.component.scss"],
    providers: [CURRENCY_EDIT_CONTROL_VALUE_ACCESSOR]
})
export class CurrencyEditComponent implements ControlValueAccessor {
    private onTouchedCallback: () => void = () => { };
    private onChangeCallback: (_: any) => void = () => { };

    public inputValue: string;
    private currencyValue: number;

    @Input() public allowZeros: boolean = false;
    @Input() public allowNegative: boolean = false;
    @Input() public label: string | null = null;
    @Input() public hint: string | null = null;

    @ViewChild("inputBox", {static: false}) public inputElement: ElementRef;

    constructor(private changeDetector: ChangeDetectorRef, private zone: NgZone, private element: ElementRef) {

    }

    private getSanitizedFromEvent(value: string): number {
        const newValue: string = value.replace(/[^0-9-.]/g, "");
        const toNumber: number = this.toNumber(newValue);
        let sanitizedNewValue: number = this.sanitizeInput(toNumber);
        if (!this.allowNegative) {
            sanitizedNewValue = Math.abs(sanitizedNewValue);
        }
        return sanitizedNewValue;
    }

    public onChange(newValue: string): void {
        const sanitizedNewValue: number = this.getSanitizedFromEvent(newValue);

        this.value = sanitizedNewValue;
    }

    private toNumber(input: string): number {
        return Number(input);
    }

    private sanitizeInput(input: number): number {
        if (!input) {
            return 0;
        }
        const toFloat: number = Number(input.toFixed(2));

        return !toFloat ? 0 : toFloat;
    }

    private toStringSafe(input: number): string {
        if (!input || input === 0 || typeof input !== "number") {
            if (this.allowZeros) {
                return "0";
            } else {
                return "";
            }
        }

        return input.toFixed(2);
    }


    // get accessor
    get value(): number {
        return this.currencyValue;
    }

    // set accessor including call the onchange callback
    set value(value: number) {
        const stringSafeValue: string = this.toStringSafe(value);

        if (value !== this.currencyValue) {
            this.currencyValue = value;
            this.inputValue = stringSafeValue;
            this.onChangeCallback(value);
        } else {
            // we must set the value manually on the DOM
            // because it hasn't changed, angular won't update it.
            this.inputElement.nativeElement.value = stringSafeValue;
        }
    }

    // from ControlValueAccessor interface
    writeValue(value: number): void {
        if (value !== this.currencyValue) {
            this.currencyValue = value;
            this.inputValue = this.toStringSafe(value);
        }
    }

    // from ControlValueAccessor interface
    registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    // from ControlValueAccessor interface
    registerOnTouched(fn: any): void {
        this.onTouchedCallback = fn;
    }
}
