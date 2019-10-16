import { Component, Input, OnChanges, SimpleChanges,
         Output, EventEmitter, OnInit, HostBinding, HostListener } from "@angular/core";

import { EnvelopeModel } from "../../../core/models";
import { Store } from "@ngrx/store";
import { IEnvelopesState, getSelectedEnvelope } from "src/app/core/reducers/envelopes.reducer";
import { SelectEnvelopeAction } from "src/app/core/actions/envelopes.actions";


@Component({
    selector: "moneteer-envelope",
    templateUrl: "./envelope.component.html",
    styleUrls: ["./envelope.component.scss"]
})
export class EnvelopeComponent implements OnChanges, OnInit {
    @Input() public envelope: EnvelopeModel;
    
    @Output() public assignedChanged: EventEmitter<{oldValue: number, newValue: number}> =
        new EventEmitter<{oldValue: number, newValue: number}>();

    @HostBinding('class.selected') private isSelected: boolean; 

    public get balanceDisplayClass(): string {
        if (this.envelope.balance > 0) {
            return "is-good";
        } else if (this.envelope.balance < 0) {
            return "is-bad";
        } else {
            return "";
        }
    }

    public assignedValue: number;

    constructor(private store: Store<IEnvelopesState>) {

    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.monthCategory) {
            this.assignedValue = changes.monthCategory.currentValue.assigned;
        }
        if (changes.assignedValue) {
            console.log(changes);
        }
    }

    ngOnInit(): void {
        this.store.select(getSelectedEnvelope).subscribe(e => this.isSelected = !!e && this.envelope.id === e.id)
    }

    @HostListener('click') click() {
        if (!this.envelope) return;

        this.store.dispatch(new SelectEnvelopeAction({envelopeId: this.envelope.id}))
    }
}