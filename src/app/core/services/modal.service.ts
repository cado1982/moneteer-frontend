import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable()
export class ModalService {
    public message: string;
    public title: string;
    public open: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() {

    }

    public showError(error: string, title: string) : void {
        this.open.next(true);
        this.message = error;
        this.title = title;
    }

    public closeError() {
        this.open.next(false);
        this.message = "";
        this.title = "";
    }
}
