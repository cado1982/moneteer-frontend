import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { EnvelopeModel } from '../../../core/models';
import { DropdownComponent } from '../../../shared/components';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'moneteer-envelope-select-dropdown',
    templateUrl: './envelope.select.dropdown.component.html',
    styleUrls: ['./envelope.select.dropdown.component.scss']
})
export class EnvelopeSelectDropdownComponent implements OnInit {
    @Input() public disabled: Boolean;
    @Input() public envelopes: EnvelopeModel[];

    private _selectedEnvelope: EnvelopeModel;
    @Input() public get selectedEnvelope() { return this._selectedEnvelope; }
    public set selectedEnvelope(value: EnvelopeModel) {
        this._selectedEnvelope = value;
        this.searchFilter = this._selectedEnvelope ? this._selectedEnvelope.name : "";
        this.selectedEnvelopeChange.emit(this._selectedEnvelope);
    }
    @Output() public selectedEnvelopeChange = new EventEmitter<EnvelopeModel>();

    public searchFilter: string;
    public searchFilterTerm$: Subject<string> = new Subject<string>();
    public isCreatingNewEnvelope$: Observable<boolean>; 

    @ViewChild(DropdownComponent, {static: false}) public dropDown: DropdownComponent;

    ngOnInit(): void {
        this.isCreatingNewEnvelope$ = this.searchFilterTerm$.pipe(
            map(term => !this.envelopes.some(p => p.name.toLowerCase() === term.toLowerCase()))
        );
    }


    public onSearchInputBlur($event: { target: { value: string }}): void {
        
        const newEnvelope: string = $event.target.value;
        const envelope = !this.envelopes ? null : this.envelopes.find(a => a.name.toLowerCase() === newEnvelope.toLowerCase());
        if (envelope) {
            this.selectedEnvelope = envelope;
        } else {
            this.selectedEnvelope = new EnvelopeModel(this.searchFilter);
        }
    }

    public onSearchInputFocus($event: any): void {
        $event.target.select();
        this.searchFilterTerm$.next("");
    }

    public envelopeClicked(envelope: EnvelopeModel): void {
        this.selectedEnvelope = envelope;
    }

}
