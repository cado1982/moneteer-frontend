import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { NotificationsService } from "../../../core/services/index";
import { EnvelopeCategoryModel } from "../../../core/models/index";
import { GuidModel } from "../../../core/models/guid.model";
import { DropdownComponent } from "../../../shared/components/index";

@Component({
    selector: "moneteer-envelopes-month-category-create",
    templateUrl: "./envelopes.month.category.create.component.html",
    styleUrls: ["./envelopes.month.category.create.component.scss"]
})
export class EnvelopesMonthCategoryCreateComponent {
    @Input() public anchor: ElementRef;
    @Input() public envelopeCategory: EnvelopeCategoryModel;

    @ViewChild(DropdownComponent) public dropDown: DropdownComponent;
    @ViewChild("nameInput") public nameInput: ElementRef;

    public name: string;
    public isCreating: boolean = false;

    constructor(private notificationsService: NotificationsService) {

    }

    public create(): void {
        if (!this.canCreate()) { return; }

        this.isCreating = true;

        /*this.categoryActions.createCategory(this.name, this.masterCategory).retry(2).finally(() => {
            this.isCreating = false;
        }).subscribe(c => {
            this.notificationsService.success("Catetory created");
            this.dropDown.close();
        }, err => {
            this.notificationsService.error("Something went wrong. Please try again later");
        });*/
    }

    public canCreate(): boolean {
        return !!this.name && !!this.envelopeCategory && this.envelopeCategory.id !== GuidModel.empty;
    }

    public onDropdownOpened(): void {
        setTimeout(() => this.nameInput.nativeElement.focus(), 1);
    }
}