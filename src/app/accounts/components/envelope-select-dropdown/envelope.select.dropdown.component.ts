import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EnvelopeModel } from '../../../core/models';

@Component({
    selector: 'moneteer-envelope-select-dropdown',
    templateUrl: './envelope.select.dropdown.component.html',
    styleUrls: ['./envelope.select.dropdown.component.scss']
})
export class EnvelopeSelectDropdownComponent implements OnInit {
    @Input() public disabled: Boolean;
    @Input() envelopes: EnvelopeModel[];
    
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


}
