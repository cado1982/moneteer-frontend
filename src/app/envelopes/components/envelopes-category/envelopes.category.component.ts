import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output, } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";
import * as _ from "lodash";

import { EnvelopeCategoryModel, EnvelopeModel, GuidModel } from "../../../core/models";
import { Store } from "@ngrx/store";
import { IEnvelopesState } from "src/app/core/reducers/envelopes.reducer";
import { UpdateEnvelopeCategoryIsToggledRequestAction, EnvelopeCategoryToggleRequestAction } from "src/app/core/actions/envelopes.actions";

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

    public balance: number = 0;

    constructor(private store: Store<IEnvelopesState>) {

    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.envelopes) {
            this.updateBalance();
        } 
        // if (changes.category) {
        //     this.isToggled = this.category.isToggled;
        // }
    }

    private updateBalance(): void {
        this.balance = this.envelopes.length === 0 ? 0 : this.envelopes.map(e => e.balance).reduce((a, b) => a + b);
    }

    public headerClicked(): void {
        if (!this.category) return;

        if (this.category.id) {
            this.store.dispatch(new EnvelopeCategoryToggleRequestAction({envelopeCategory: this.category}));
        } else {
            // This is the hidden envelope which has an 'undefined' id property
            // At some point we want to move this state to the database
            this.category.isToggled = !this.category.isToggled;
        }
        
    }
}
