import { Component, OnInit, Input, EventEmitter, Output, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
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
    public highlightedEnvelope: EnvelopeModel | null = null;

    @ViewChild(DropdownComponent, { static: false }) public dropDown: DropdownComponent;
    @ViewChild("searchInput", { static: false }) inputBox: ElementRef;

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
        console.log("up");
    }

    private onEnterPressed(): void {
        console.log("enter");
    }


    // public onSearchInputBlur($event: { target: { value: string } }): void {
    //     if (this.selectedEnvelope !== null) {
    //         this
    //     }
    //     const newEnvelope: string = $event.target.value;
    //     const envelope = !this.envelopes$.value ? null : this.envelopes$.value.find(a => a.name.toLowerCase() === newEnvelope.toLowerCase());
    //     if (envelope) {
    //         this.selectedEnvelope = envelope;
    //     } else {
    //         this.selectedEnvelope = null
    //     }
    // }

    public onSearchInputFocus($event: any): void {
        $event.target.select();
        this.searchFilterTerm$.next("");
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
        this.selectedEnvelope = envelope;
    }

    public createEnvelope(): void {

    }

    private selectFirstItem(): void {

    }

}
