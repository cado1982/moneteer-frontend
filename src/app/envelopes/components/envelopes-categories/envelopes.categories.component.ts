import { Component, Input, Output, EventEmitter, } from "@angular/core";
import { EnvelopeModel, EnvelopeCategoryModel } from "../../../core/models";

@Component({
    selector: "moneteer-envelopes-categories",
    templateUrl: "./envelopes.categories.component.html",
    styleUrls: ["./envelopes.categories.component.scss"]
})
export class EnvelopesCategoriesComponent {
    @Input() public envelopes: Array<EnvelopeModel>;
    
    @Output() public assignedChanged: EventEmitter<{oldValue: number, newValue: number}>
        = new EventEmitter<{oldValue: number, newValue: number}>();

    public onMasterCategoryAssignedChanged(changes: {oldValue: number, newValue: number}): void {
        this.assignedChanged.emit(changes);
    }
}
