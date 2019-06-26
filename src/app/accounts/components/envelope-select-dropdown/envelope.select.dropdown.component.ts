import { Component, OnInit, Input, EventEmitter, Output, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { EnvelopeModel } from '../../../core/models';
import { DropdownComponent } from '../../../shared/components';
import { Subject, Observable, BehaviorSubject, combineLatest, fromEvent } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { groupBy, Dictionary } from 'lodash';
import { CheckedViewModel } from 'src/app/shared/view-models/checked.view.model';

@Component({
    selector: 'moneteer-envelope-select-dropdown',
    templateUrl: './envelope.select.dropdown.component.html',
    styleUrls: ['./envelope.select.dropdown.component.scss']
})
export class EnvelopeSelectDropdownComponent implements OnInit ,AfterViewInit {
    @Input() public disabled: Boolean;
    @Input() public envelopes$: BehaviorSubject<EnvelopeModel[]> = new BehaviorSubject([]);
    public filteredEnvelopes$: Observable<{groupName: string, envelopes: CheckedViewModel<EnvelopeModel>[]}[]>;

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

    @ViewChild(DropdownComponent, { static: false }) public dropDown: DropdownComponent;
    @ViewChild("searchInput", { static: false }) inputBox: ElementRef;

    ngOnInit(): void {
        this.isCreatingNewEnvelope$ = combineLatest(this.envelopes$, this.searchFilterTerm$).pipe(
            map((value) => {
                const envelopes = value[0];
                const searchTerm = value[1];

                return !envelopes.some(p => p.name.toLowerCase() === searchTerm.toLowerCase())
            })
        );

        this.filteredEnvelopes$ = combineLatest(this.envelopes$, this.searchFilterTerm$).pipe(
            map((value) => {
                const envelopes = value[0];
                const searchTerm = value[1];

                const filteredEnvelopes = envelopes.filter(p => searchTerm === "" || p.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
                const checkedViewModels = filteredEnvelopes.map(e => new CheckedViewModel(e))

                if (checkedViewModels.length > 0 && searchTerm !== "") {
                    checkedViewModels[0].isChecked = true
                }

                return checkedViewModels;
            }),
            map((envelopes: CheckedViewModel<EnvelopeModel>[]) => {
                const grouped = groupBy(envelopes, n => n.model.envelopeCategory.name)
                const toArray = Object.entries(grouped)
                return toArray.map(value => {
                    const groupName = value[0];
                    const envelopes = value[1];

                    return {
                        groupName,
                        envelopes
                    }
                })
            })
        );

        this.searchFilterTerm$.subscribe(term => {
            if (term !== "") {
                this.selectFirstItem();
            }
        })
    }

    ngAfterViewInit(): void {
        fromEvent<KeyboardEvent>(this.inputBox.nativeElement, 'keyup').pipe(
            filter(event => event.key === "ArrowDown" || event.key === "ArrowUp"),
        ).subscribe(event => {
            switch (event.key) {
                case "ArrowDown":
                    console.log("down");
                    break;
                case "ArrowUp":
                    console.log("up")
                    break;
            }
        })
    }


    public onSearchInputBlur($event: { target: { value: string } }): void {
        const newEnvelope: string = $event.target.value;
        const envelope = !this.envelopes$.value ? null : this.envelopes$.value.find(a => a.name.toLowerCase() === newEnvelope.toLowerCase());
        if (envelope) {
            this.selectedEnvelope = envelope;
        } else {
            this.selectedEnvelope = null
        }
    }

    public onSearchInputFocus($event: any): void {
        $event.target.select();
        this.searchFilterTerm$.next("");
    }

    public onSearchInputValueChanged(newValue: string): void {
        this.searchFilterTerm$.next(newValue);
    }

    public onSearchInputKeyUp($event: any): void {
        // fromEvent()
        // if ($event.key === "ArrowDown") {
        //     this.filteredEnvelopes$.
        //     this.filteredEnvelopes$.forEach
        // } else if ($event.key === "ArrowUp") {

        // }
    }

    public envelopeClicked(envelope: EnvelopeModel): void {
        this.selectedEnvelope = envelope;
    }

    public createEnvelope(): void {

    }

    private selectFirstItem(): void {

    }

}
