import { Component, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'moneteer-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
    @Input() public isLoading = false;

    constructor() {

    }
}
