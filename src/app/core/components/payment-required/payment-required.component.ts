import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'moneteer-payment-required',
    templateUrl: './payment-required.component.html',
    styleUrls: ['./payment-required.component.scss']
})
export class PaymentRequiredComponent implements OnInit {

    public get LandingUrl(): string {
        return environment.landing_url;
    }

    constructor() { }

    ngOnInit() {
    }

}
