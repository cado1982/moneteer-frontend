import { Component, Input, EventEmitter, Output, } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";
import { EnvelopeCategoryModel } from "../../../core/models";

@Component({
    selector: "moneteer-envelopes-category-header",
    templateUrl: "./envelopes.category.header.component.html",
    styleUrls: ["./envelopes.category.header.component.scss"],
    animations: [
        trigger("toggled", [
            state("0", style({
                transform: "rotate(-90deg)"
            })),
            transition("* <=> 0", animate("200ms ease-out"))
        ])
    ],
    host: {
        "(mouseenter)": "showCreateCategoryButton = true",
        "(mouseleave)": "showCreateCategoryButton = false"
    }
})
export class EnvelopesCategoryHeaderComponent {
    @Input() public envelopeCategory: string;
    @Input() public assigned: number;
    @Input() public activity: number;
    @Input() public balance: number;

    public isToggled: boolean = true;

    public showCreateCategoryButton: boolean = false;

    @Output() public toggled: EventEmitter<boolean> = new EventEmitter<boolean>();

    public onToggled(): void {
        this.isToggled = !this.isToggled;
        this.toggled.emit(this.isToggled);
    }
}
