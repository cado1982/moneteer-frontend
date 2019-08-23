
import { Component } from "@angular/core";

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