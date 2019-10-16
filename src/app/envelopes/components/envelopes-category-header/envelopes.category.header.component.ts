import { Component, Input, EventEmitter, Output, HostListener, SimpleChanges, OnChanges, } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EnvelopesAddModalComponent } from "../envelopes-add-modal/envelopes-add-modal.component";
import { EnvelopeCategoryModel, GuidModel } from "src/app/core/models";
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
        "(mouseleave)": "showCreateCategoryButton = false"
    }
})
export class EnvelopesCategoryHeaderComponent implements OnChanges {
    @Input() public category: EnvelopeCategoryModel;
    @Input() public balance: number;

    @HostListener('click') click() {
        this.isToggled = !this.isToggled;
    }

    constructor(
        private modal: NgbModal,
        private route: ActivatedRoute
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.category && changes.category.firstChange) {
            this.isToggled = this.category && !!this.category.id
        }
    }

    private _isToggled: boolean;
    public get isToggled() { return this._isToggled };
    public set isToggled(newValue: boolean) { this._isToggled = newValue; this.toggled.emit(newValue) };

    @Output() public toggled = new EventEmitter<boolean>();

    addEnvelope($event: any): void {
        $event.stopPropagation();

        if (this.category.id === GuidModel.empty) return;

        const budgetId = this.route.snapshot.params.budgetId;

        if (!budgetId) throw Error("Budget id is missing");

        const modalRef = this.modal.open(EnvelopesAddModalComponent);
        modalRef.componentInstance.envelopeCategory = this.category;
        modalRef.componentInstance.budgetId = budgetId;
    }
}
