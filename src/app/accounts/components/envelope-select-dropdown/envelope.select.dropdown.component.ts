import { Component, OnInit, Input, EventEmitter, Output, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { EnvelopeModel } from '../../../core/models';
import { DropdownComponent } from '../../../shared/components';
import { Subject, Observable, BehaviorSubject, combineLatest, fromEvent } from 'rxjs';
import { map, filter, tap, mergeMap, concatMap } from 'rxjs/operators';
import { groupBy, Dictionary } from 'lodash';

@Component({
    selector: 'moneteer-envelope-select-dropdown',
    templateUrl: './envelope.select.dropdown.component.html',
    styleUrls: ['./envelope.select.dropdown.component.scss']
})
export class EnvelopeSelectDropdownComponent implements OnInit {
    @Input() public disabled: Boolean;

    private _envelopes: EnvelopeModel[];
    @Input() set envelopes(value: EnvelopeModel[]) {
        this._envelopes = value;

    }
    get envelopes(): EnvelopeModel[] {
        return this._envelopes
    }
    
    public clickedEnvelope: EnvelopeModel | null;
    public filteredEnvelopes: { groupName: string, envelopes: EnvelopeModel[] }[];

    private _selectedEnvelope: EnvelopeModel | null;
    @Input() public get selectedEnvelope() { return this._selectedEnvelope; }
    public set selectedEnvelope(value: EnvelopeModel | null) {
        this._selectedEnvelope = value;

        if (this._selectedEnvelope == null) {
            this.searchFilter = ""
        } else if (this._selectedEnvelope.envelopeCategory == null) {
            this.searchFilter = this._selectedEnvelope.name
        } else {
            this.searchFilter = `${this._selectedEnvelope.envelopeCategory.name}: ${this._selectedEnvelope.name}`
        }

        this.selectedEnvelopeChange.emit(this._selectedEnvelope);
    }
    @Output() public selectedEnvelopeChange = new EventEmitter<EnvelopeModel | null>();

    public searchFilter: string;
    public searchFilterTerm$: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public isCreatingNewEnvelope$: Observable<boolean>;
    
    private _highlightedEnvelope: EnvelopeModel | null = null;
    public get highlightedEnvelope(): EnvelopeModel | null {
        return this._highlightedEnvelope;
    }
    public set highlightedEnvelope(value: EnvelopeModel | null) {
        this._highlightedEnvelope = value;
        this.scrollToHighlightedEnvelope();
    }

    private scrollToHighlightedEnvelope(): void {
        if (!this.envelopeElements) return;
        if (!this.highlightedEnvelope) return;

        const elements = this.envelopeElements.filter(e => e.nativeElement.id === this.highlightedEnvelope!.id);

        if (!!elements && elements.length > 0) {
            elements[0].nativeElement.scrollIntoView(false);
        }
    }

    @ViewChild(DropdownComponent, { static: false }) public dropDown: DropdownComponent;
    @ViewChild("searchInput", { static: false }) inputBox: ElementRef;
    @ViewChildren("envelopeElement") envelopeElements: QueryList<ElementRef>;

    ngOnInit(): void {
        this.isCreatingNewEnvelope$ = this.searchFilterTerm$.pipe(
            map((searchTerm) => !this.envelopes.some(p => p.name.toLowerCase() === searchTerm.toLowerCase()))
        );

        this.searchFilterTerm$.subscribe(searchTerm => {
            const filteredEnvelopes = this.envelopes.filter(p => searchTerm === "" || p.name.toLowerCase().startsWith(searchTerm.toLowerCase()))

            this.highlightedEnvelope = filteredEnvelopes.length === 0 ? null : filteredEnvelopes[0]

            const grouped = groupBy(filteredEnvelopes, n => n.envelopeCategory.name)
            const toArray = Object.entries(grouped)
            const groups = toArray.map(value => {
                const groupName = value[0];
                const envelopes = value[1];

                return {
                    groupName,
                    envelopes
                }
            })

            this.filteredEnvelopes = groups;
        })

        this.searchFilterTerm$.subscribe(term => {
            if (term !== "") {
                this.selectFirstItem();
            }
        })
    }

    private onDownPressed(): void {
        if (this.highlightedEnvelope === null) return;

        const highlightedIndex = this.envelopes.indexOf(this.highlightedEnvelope)
        const nextIndex = highlightedIndex + 1;

        if (nextIndex > this.envelopes.length - 1) { return } // Already at end of array

        const nextItem = this.envelopes[nextIndex]
        this.highlightedEnvelope = nextItem;
    }

    private onUpPressed(): void {
        if (this.highlightedEnvelope === null) return;

        const highlightedIndex = this.envelopes.indexOf(this.highlightedEnvelope)
        const previousIndex = highlightedIndex - 1;

        if (previousIndex < 0) { return } // Already at end of array

        const previousItem = this.envelopes[previousIndex]
        this.highlightedEnvelope = previousItem;
    }

    private onEnterPressed(): void {
        this.selectedEnvelope = this.highlightedEnvelope;
        this.inputBox.nativeElement.blur();
    }


    public onSearchInputBlur(): void {
        if (!!this.clickedEnvelope) {
            this.selectedEnvelope = this.clickedEnvelope
            this.clickedEnvelope = null;
        } else if (!!this.highlightedEnvelope) {
            this.selectedEnvelope = this.highlightedEnvelope;
        }
    }

    public onSearchInputFocus($event: any): void {
        this.clickedEnvelope = null;

        $event.target.select();

        this.searchFilterTerm$.next("");
        if (this.selectedEnvelope !== null) {
            this.highlightedEnvelope = this.selectedEnvelope
        }
        
    }

    public onSearchInputValueChanged(newValue: string): void {
        this.searchFilterTerm$.next(newValue);
    }

    public onSearchInputKeyUp($event: any): void {
        switch ($event.key) {
            case "ArrowDown":
                this.onDownPressed();
                break;
            case "ArrowUp":
                this.onUpPressed();
                break;
            case "Enter":
                this.onEnterPressed();
                break;
        }
    }

    public envelopeClicked(envelope: EnvelopeModel): void {
        this.clickedEnvelope = envelope;
    }

    public createEnvelope(): void {

    }

    private selectFirstItem(): void {

    }

}
