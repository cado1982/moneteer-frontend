import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

import { Subject } from 'rxjs';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { DropdownComponent } from '../../../shared/components';
import { AccountModel } from '../../models';

@Component({
    selector: 'moneteer-account-select-dropdown',
    templateUrl: './account.select.dropdown.component.html',
    styleUrls: ['./account.select.dropdown.component.scss']
})
export class AccountSelectDropdownComponent {
    
    @Input() public accounts: AccountModel[];

    @Input() public selectedAccount: AccountModel;    
    @Output() public selectedAccountChange = new EventEmitter<AccountModel>();


}
