import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
    selector: '[moneteerCurrencyInput]'
})
export class CurrencyInputDirective implements OnInit {
    private _value: number;
    @Input() public get value() {
        return this._value;
    }

    public set value(newVal) {
        const stringSafeValue: string = this.toStringSafe(newVal);

        this.inputElement.nativeElement.value = stringSafeValue;

        this._value = newVal;
    }

    @Output() public valueChange = new EventEmitter<number>();

    @Input() public allowZeros: boolean;
    @Input() public allowNegative: boolean;

    constructor(
        private inputElement: ElementRef) {

    }

    ngOnInit() {
        // This is necessary because this.value is set before the input bindings are resolved.
        // Without this, allowZeros and allowNegative won't be used for initial values.
        this.value = this._value;
    }

    @HostListener('focus', ['$event']) onFocus($event) {
        $event.target.select();
    }

    @HostListener('blur', ['$event']) onBlur($event) {
        const value = this.inputElement.nativeElement.value;

        const sanitizedNewValue: number = this.getSanitizedFromEvent(value);

        this.value = sanitizedNewValue;
        this.valueChange.emit(this.value);
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
}
