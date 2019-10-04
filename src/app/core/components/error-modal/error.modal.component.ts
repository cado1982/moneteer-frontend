import { Component, ViewContainerRef, ViewEncapsulation } from "@angular/core";
import { ModalService } from "../../services/modal.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "moneteer-error-modal",
    encapsulation: ViewEncapsulation.None,
    templateUrl: "error.modal.component.html",
    styleUrls: ["error.modal.component.scss"]
})
export class ErrorModalComponent {
    public title: string;
    public message: string;
    public traceId: string;

    constructor(public modal: NgbActiveModal) {
        
    }
}