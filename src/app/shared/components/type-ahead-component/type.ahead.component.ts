import { Component, forwardRef, Input, HostBinding, ViewChild, ElementRef } from "@angular/core";
import * as Drop from "tether-drop";
import { Subject ,  BehaviorSubject } from "rxjs";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

export const TYPE_AHEAD_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TypeAheadComponent),
    multi: true
};

@Component({
    selector: "moneteer-type-ahead",
    templateUrl: "./type.ahead.component.html",
    styleUrls: ["./type.ahead.component.scss"],
    providers: [TYPE_AHEAD_CONTROL_VALUE_ACCESSOR]
})
export class TypeAheadComponent implements ControlValueAccessor {
    private _values: Array<any>;
    @Input() set values(value: Array<any>) {
        this._values = value;
        if (value) {
            const filteredValues: any[] =
                value.filter(v => !this.searchFilter ||
                                  v[this.displayProperty].toLowerCase().indexOf(this.searchFilter.toLowerCase()) > -1);
            this.filteredValues.next(filteredValues);
        }
    }
    get values(): Array<any> {
        return this._values;
    }

    @Input("group-by") groupByProperty: string;
    @Input("display-property") displayProperty: string;
    @Input() allowNewItems: boolean;
    @Input() @HostBinding("class.selected") isSelected: boolean;
    @Input() disabled: boolean;

    @ViewChild("searchInput", {static: false}) public searchInput: ElementRef;
    @ViewChild("dropDownContent", {static: false}) public dropDownContent: ElementRef;

    private selectedItem: any;

    public searchFilter: string;
    public searchFilterTerm$: Subject<string> = new Subject<string>();
    private dropDown: Drop;
    public filteredValues: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);

    private onTouchedCallback: () => void = () => { };
    private onChangeCallback: (_: any) => void = () => { };

    ngOnInit(): void {
        this.searchFilterTerm$.subscribe((f: string) => {
            if (this.values) {
                const filteredValues: any[] =
                    this.values.filter(v => !f || v[this.displayProperty].toLowerCase().indexOf(f.toLowerCase()) > -1);
                this.filteredValues.next(filteredValues);
            }

        });
    }

    ngAfterViewInit(): void {
        this.dropDown = new Drop({
            target: this.searchInput.nativeElement,
            content: this.dropDownContent.nativeElement,
            position: "bottom center",
            openOn: undefined,
            classes: "drop-theme-arrows-bounce",
            constrainToScrollParent: false,
            constrainToWindow: false
        });
    }

    public onSearchInputBlur($event: { target: { value: string }}): void {
        this.dropDown.close();
        const newValue: string = $event.target.value;
        const item: any =
            !this.values ? null : this.values.find(v => v[this.displayProperty].toLowerCase().indexOf(newValue.toLowerCase()) > -1);
        if (item) {
            this.searchFilter = item[this.displayProperty];
            this.value = item;
        } else {
            if (this.allowNewItems) {
                this.value = { [this.displayProperty]: this.searchFilter };
            } else {
                this.searchFilter = !this.value ? "" : this.value[this.displayProperty];
            }
        }
    }

    public onSearchInputFocus($event: any): void {
        this.dropDown.open();
        $event.target.select();
        this.searchFilterTerm$.next("");
    }

    private itemClicked(item: any): void {
        this.value = item;
        this.dropDown.close();
    }

    // get accessor
    get value(): any {
        return this.selectedItem;
    }

    // set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.selectedItem) {
            this.selectedItem = v;
            this.searchFilter = v[this.displayProperty];
            this.onChangeCallback(v);
        }
    }

    // from ControlValueAccessor interface
    writeValue(value: any): void {
        if (value !== this.selectedItem) {
            this.selectedItem = value;
            if (value) {
                this.searchFilter = value[this.displayProperty];
            }
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
