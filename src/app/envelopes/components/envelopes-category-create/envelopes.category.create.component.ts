import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { NotificationsService } from "../../../core/services/index";
import { DropdownComponent } from "../../../shared/components/index";
import { Store } from "@ngrx/store";
import { IEnvelopesState } from "../../../core/reducers/envelopes.reducer";
import { ActivatedRoute } from "@angular/router";
import { EnvelopeCategoryModel } from "../../../core/models";

@Component({
    selector: "moneteer-envelopes-category-create",
    templateUrl: "./envelopes.category.create.component.html",
    styleUrls: ["./envelopes.category.create.component.scss"]
})
export class EnvelopesCategoryCreateComponent {
    @Input() public anchor: ElementRef;
    @Input() public envelopeCategory: EnvelopeCategoryModel;

    @ViewChild(DropdownComponent) public dropDown: DropdownComponent;
    @ViewChild("nameInput") public nameInput: ElementRef;

    public name: string;
    public isCreating: boolean = false;

    constructor(private notificationsService: NotificationsService, private store: Store<IEnvelopesState>, private route: ActivatedRoute) {

    }

    public create(): void {
        if (!this.canCreate()) { return; }

        this.isCreating = true;

        if (!this.route.snapshot.parent || !this.route.snapshot.parent.parent || !this.route.snapshot.parent.params || !this.route.snapshot.parent.params.budgetId) {
            throw new Error("Unable to find budgetId from route");
        }

        const budgetId = this.route.snapshot.parent.parent.params.budgetId;
        // this.store.dispatch(new CreateMasterCategoryAction({budgetId, category: new MasterCategoryModel(this.name)}));

        /*this.categoryActions.createMasterCategory(this.name).retry(2).finally(() => {
            this.isCreating = false;
        }).subscribe(c => {
            this.notificationsService.success("Catetory created");
            this.dropDown.close();
        }, err => {
            this.notificationsService.error("Something went wrong. Please try again later");
        });*/
    }

    public canCreate(): boolean {
        return !!this.name;
    }

    public onDropdownOpened(): void {
        setTimeout(() => this.nameInput.nativeElement.focus(), 1);
    }
}