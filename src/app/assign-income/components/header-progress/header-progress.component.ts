import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'moneteer-assign-income-header-progress',
    templateUrl: './header-progress.component.html',
    styleUrls: ['./header-progress.component.scss']
})
export class HeaderProgressComponent implements OnInit {
    @Input() public availableIncome: number;

    private _currentlyAssigned: number;
    public get currentlyAssigned(): number {
        return this._currentlyAssigned;
    }
    @Input() public set currentlyAssigned(newValue: number) {
        this._currentlyAssigned = newValue;
        this.percentageAssigned = newValue === 0 ? 0 : (newValue / this.availableIncome) * 100;
    }

    public percentageAssigned: number = 0;

    constructor() {

    }

    ngOnInit() {

    }

}
