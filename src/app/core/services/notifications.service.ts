import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ModalService } from "./modal.service";
 
@Injectable()
export class NotificationsService {
    constructor(private toastsManager: ToastrService, private modalService: ModalService) {

    }

    public success(message: string, title: string = ""): void {
        this.toastsManager.success(message, title);
    }

    public error(message: string, title: string = ""): void {
        this.toastsManager.error(message, title);
    }

    public errorModal(message: string, title: string = ""): void {
        this.modalService.showError(message, "Oh snap!");
    }
}
