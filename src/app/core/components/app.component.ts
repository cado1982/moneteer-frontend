
import { Component, ViewContainerRef } from "@angular/core";
import { AuthService } from "../services";
import { ModalService } from "../services/modal.service";

@Component({
    selector: "moneteer-root",
    template: `<ngx-loading-bar></ngx-loading-bar>
    <router-outlet></router-outlet>
    <moneteer-error-modal></moneteer-error-modal>`
})
export class AppComponent {
    constructor() {
        
    }
}