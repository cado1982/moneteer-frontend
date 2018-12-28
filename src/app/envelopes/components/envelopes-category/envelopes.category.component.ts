import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output, } from "@angular/core";


import { trigger, state, style, animate, transition } from "@angular/animations";
import * as _ from "lodash";

import { EnvelopeCategoryModel, EnvelopeModel } from "../../../core/models";

@Component({
    selector: "moneteer-envelopes-category",
    templateUrl: "./envelopes.category.component.html",
    styleUrls: ["./envelopes.category.component.scss"],
    animations: [
        trigger("categoryVisible", [
            state("1", style({
                height: "*",
                opacity: 1
            })),
            state("0", style({
                height: "0",
                opacity: 0,
                display: "none"
            })),
            transition("1 <=> 0", animate("200ms ease-out"))
        ])
    ]
})
export class EnvelopesCategoryComponent implements OnChanges {

    @Input() public envelopeCategory: EnvelopeCategoryModel;
    @Input() public envelopes: Array<EnvelopeModel>;
    @Output() public assignedChanged: EventEmitter<{oldValue: number, newValue: number}>
        = new EventEmitter<{oldValue: number, newValue: number}>();

    public isToggled: boolean = true;

    public assigned: number;
    public activity: number;
    public balance: number;

    ngOnChanges(changes: SimpleChanges): void {
        // if (changes.masterCategoryMonth) {
        //     this.updateAssigned();
        //     this.updateActivity();
        //     this.updateBalance();
        // }
    }

    // private onChildCategoryAssignedChanged(event: {oldValue: number, newValue: number}): void {
    //     const oldValue = this.assigned;
    //     this.updateAssigned();
    //     this.updateBalance();
    //     const newValue = this.assigned;
    //     this.assignedChanged.emit({oldValue, newValue});
    // }

    // private updateAssigned(): void {
    //     this.assigned = _(this.masterCategoryMonth.categories).map(c => c.assigned).sum();
    // }

    // private updateActivity(): void {
    //     this.activity = _(this.masterCategoryMonth.categories).map(c => c.activity).sum();
    // }

    // private updateBalance(): void {
    //     this.balance = _(this.masterCategoryMonth.categories).map(c => c.balance).sum();
    // }
}
