import { Injectable } from "@angular/core";
import { ModalService } from "./modal.service";
 
@Injectable()
export class NotificationsService {
    constructor(private modalService: ModalService) {

    }

    public success(message: string, title: string = ""): void {
        console.log(message);
        //this.toastsManager.success(message, title);
    }

    public error(message: string, title: string = ""): void {
        console.error(message);
        //this.toastsManager.error(message, title);
    }

    public errorModal(message: string, title: string = ""): void {
        this.modalService.showError(message, "Oh snap!");
    }
}
