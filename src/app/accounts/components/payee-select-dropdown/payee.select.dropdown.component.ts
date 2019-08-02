import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PayeeModel } from '../../../core/models';

@Component({
    selector: 'moneteer-payee-select-dropdown',
    templateUrl: './payee.select.dropdown.component.html',
    styleUrls: ['./payee.select.dropdown.component.scss']
})
export class PayeeSelectDropdownComponent {
    
    @Input() public payees: PayeeModel[];
    @Input() public selectedPayee: PayeeModel;
    @Output() public selectedPayeeChange = new EventEmitter<PayeeModel>();

}
