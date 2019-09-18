import { Component, Input, OnChanges, SimpleChanges,
         Output, EventEmitter, OnInit, HostBinding, HostListener } from "@angular/core";

import { EnvelopeModel } from "../../../core/models";
import { EnvelopesSelectionService } from "../../services/envelopes-selection.service";


@Component({
    selector: "moneteer-envelope",
    templateUrl: "./envelope.component.html",
    styleUrls: ["./envelope.component.scss"]
})
export class EnvelopeComponent implements OnChanges, OnInit {
    @Input() public envelope: EnvelopeModel;
    
    @Output() public assignedChanged: EventEmitter<{oldValue: number, newValue: number}> =
        new EventEmitter<{oldValue: number, newValue: number}>();

    @HostBinding('class.selected') get selected() {
        return this.isSelected();
    }

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

    constructor(public selectionService: EnvelopesSelectionService) {

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
    }

    @HostListener('click') click() {
        this.selectionService.selectedEnvelope.next(this.envelope);
    }

    public showTransactions(): void {
        console.log("Show transactions is not implemented.");
    }

    private isSelected(): boolean {
        return !!this.selectionService.selectedEnvelope.value && this.selectionService.selectedEnvelope.value.id === this.envelope.id;
    }
}