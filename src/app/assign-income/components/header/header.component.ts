import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'moneteer-assign-income-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() public currentlyAssigned: number;
    @Input() public availableIncome: number;
    
    constructor() { }

    ngOnInit() {
    }

}
