import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'moneteer-forbidden',
    templateUrl: './forbidden.component.html',
    styleUrls: ['./forbidden.component.scss']
})
export class ForbiddenComponent implements OnInit {

    public get LandingUrl(): string {
        return environment.landing_url;
    }

    constructor() { }

    ngOnInit() {
    }

}
