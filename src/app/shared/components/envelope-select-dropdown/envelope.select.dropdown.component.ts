import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EnvelopeModel } from '../../../core/models';
import { Event } from '@angular/router';

@Component({
    selector: 'moneteer-envelope-select-dropdown',
    templateUrl: './envelope.select.dropdown.component.html',
    styleUrls: ['./envelope.select.dropdown.component.scss']
})
export class EnvelopeSelectDropdownComponent implements OnInit {
    @Input() public disabled: boolean = false;
    @Input() envelopes: EnvelopeModel[];
    @Input() public inputSize: string;
    @Input() public allowMultiple: boolean;
    @Output() public onMultipleEnvelopes: EventEmitter<void> = new EventEmitter<void>();
    @Input() public hideEnvelopeIds: string[] = [];
    
    private _selectedEnvelope: EnvelopeModel | null;
    @Input() public get selectedEnvelope() { return this._selectedEnvelope; }
    public set selectedEnvelope(value: EnvelopeModel | null) {
        this._selectedEnvelope = value;

        this.selectedEnvelopeChange.emit(this._selectedEnvelope);
    }
    @Output() public selectedEnvelopeChange = new EventEmitter<EnvelopeModel | null>();
    
    ngOnInit(): void {
        
    }

    public createEnvelope(): void {
        console.log("create envelope");
    }

    public multipleEnvelopes(): void {
        this.onMultipleEnvelopes.emit();
    }
}
