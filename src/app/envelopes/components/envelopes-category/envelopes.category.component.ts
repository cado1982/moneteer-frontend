import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output, } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";
import * as _ from "lodash";

import { EnvelopeCategoryModel, EnvelopeModel } from "../../../core/models";

@Component({
    selector: "moneteer-envelopes-category",
    templateUrl: "./envelopes.category.component.html",
    styleUrls: ["./envelopes.category.component.scss"],
    animations: [
        // TODO: Fix this animation. When transitioning to * height, the animation doesn't play.
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

    @Input() public category: EnvelopeCategoryModel;
    @Input() public envelopes: Array<EnvelopeModel>;
    @Output() public assignedChanged = new EventEmitter<{oldValue: number, newValue: number}>();

    public isToggled: boolean = true;

    public balance: number = 0;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.envelopes) {
            this.updateBalance();
        }
    }

    private updateBalance(): void {
        this.balance = this.envelopes.length === 0 ? 0 : this.envelopes.map(e => e.balance).reduce((a, b) => a + b);
    }
}
