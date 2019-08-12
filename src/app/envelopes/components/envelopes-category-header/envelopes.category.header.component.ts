import { Component, Input, EventEmitter, Output, HostListener, OnInit, } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EnvelopesAddModalComponent } from "../envelopes-add-modal/envelopes-add-modal.component";
import { EnvelopeCategoryModel } from "src/app/core/models";
import { ActivatedRoute } from "@angular/router";

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
    @Input() public category: EnvelopeCategoryModel;
    @Input() public balance: number;
    @Input() public spendingLast30Days: number;

    @HostListener('click') click() {
        this.isToggled = !this.isToggled;
        this.toggled.emit(this.isToggled);
    }

    constructor(
        private modal: NgbModal,
        private route: ActivatedRoute
    ) { }

    public isToggled: boolean = true;

    @Output() public toggled = new EventEmitter<boolean>();

    addEnvelope($event: any): void {
        $event.stopPropagation();
        const budgetId = this.route.snapshot.params.budgetId;

        if (!budgetId) throw Error("Budget id is missing");

        const modalRef = this.modal.open(EnvelopesAddModalComponent);
        modalRef.componentInstance.envelopeCategory = this.category;
        modalRef.componentInstance.budgetId = budgetId;
    }
}
