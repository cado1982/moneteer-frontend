import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[moneteerCurrencyInput]'
})
export class CurrencyInputDirective {
    private _value: number;
    @Input() public get value() {
      return this._value;
    }

    public set value(newVal) {
      const stringSafeValue: string = this.toStringSafe(newVal);

      this.inputElement.nativeElement.value = stringSafeValue;

      this._value = newVal;
      this.valueChange.emit(this._value);
    }

    @Output()
    public valueChange = new EventEmitter<number>();

    @Input() public allowZeros: boolean = false;
    @Input() public allowNegative: boolean = false;

    constructor(
      private inputElement: ElementRef) {

    }

    @HostListener('focus', ['$event']) onFocus($event) {
      $event.target.select();
    }

    @HostListener('blur', ['$event']) onBlur($event) {
      const value = this.inputElement.nativeElement.value;

      const sanitizedNewValue: number = this.getSanitizedFromEvent(value);

      this.value = sanitizedNewValue;

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
