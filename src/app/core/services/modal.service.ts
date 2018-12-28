import { Injectable } from "@angular/core";

@Injectable()
export class ModalService {
    public message: string;
    public title: string;
    public open: boolean;

    constructor() {

    }

    public showError(error: string, title: string) : void {
        this.open = true;
        this.message = error;
        this.title = title;
    }
}
