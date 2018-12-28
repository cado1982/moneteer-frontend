import { Component, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { ModalService } from "../../services/modal.service";

@Component({
    selector: "moneteer-error-modal",
    encapsulation: ViewEncapsulation.None,
    templateUrl: "error.modal.component.html",
    styleUrls: ["error.modal.component.scss"]
})
export class ErrorModalComponent {
    constructor(public modalService: ModalService) {
        
    }
}