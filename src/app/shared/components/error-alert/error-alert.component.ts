import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'moneteer-error-alert',
    templateUrl: './error-alert.component.html',
    host: {
        'class': 'alert alert-danger mt-3',
        "attr.role": 'alert'
    }
})
export class ErrorAlertComponent implements OnInit {
    private _error: string;
    @Input() public get error(): string {
        return this._error;
    }
    public set error(newValue: string) {
        this._error = newValue;
        this.isHidden = !newValue;
    }

    @HostBinding("hidden") isHidden: boolean;

    constructor() { }

    ngOnInit() {
    }

}
