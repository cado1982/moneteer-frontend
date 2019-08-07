import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PayeeModel } from '../../../core/models';

@Component({
    selector: 'moneteer-payee-select-dropdown',
    templateUrl: './payee.select.dropdown.component.html',
    styleUrls: ['./payee.select.dropdown.component.scss']
})
export class PayeeSelectDropdownComponent {
    @Input() public disabled: boolean;
    @Input() public payees: PayeeModel[];
    
    private _selectedPayee: PayeeModel | null;
    @Input() public get selectedPayee() { return this._selectedPayee; }
    public set selectedPayee(value: PayeeModel | null) {
        this._selectedPayee = value;

        this.selectedPayeeChange.emit(this._selectedPayee);
    }
    @Output() public selectedPayeeChange = new EventEmitter<PayeeModel | null>();

}
