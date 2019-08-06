import { Component, Input, EventEmitter, Output, HostListener, } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";

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
        "(mouseleave)": "showCreateCategoryButton = false",
        "class": "align-items-center"
    }
})
export class EnvelopesCategoryHeaderComponent {
    @Input() public envelopeCategory: string;
    @Input() public balance: number;
    @Input() public spendingLast30Days: number;

    @HostListener('click') click() {
        this.isToggled = !this.isToggled;
        this.toggled.emit(this.isToggled);
    }

    public isToggled: boolean = true;

    public showCreateCategoryButton: boolean = false;

    @Output() public toggled: EventEmitter<boolean> = new EventEmitter<boolean>();

    addEnvelope($event: any): void {
        $event.stopPropagation();
    }
}
