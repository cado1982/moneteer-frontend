import { Component, Input, EventEmitter, Output } from '@angular/core';
import { PayeeModel } from '../../../core/models';
import { AccountModel } from '../../models';

@Component({
    selector: 'moneteer-payee-select-dropdown',
    templateUrl: './payee.select.dropdown.component.html',
    styleUrls: ['./payee.select.dropdown.component.scss']
})
export class PayeeSelectDropdownComponent {
    @Input() public disabled: boolean;
    @Input() public payees: PayeeModel[];
    @Input() public accounts: AccountModel[];
    @Input() public inputSize: string;
    
    private _selectedPayee: PayeeModel | null;
    @Input() public get selectedPayee() { return this._selectedPayee; }
    public set selectedPayee(value: PayeeModel | null) {
        this._selectedPayee = value;

        this.selectedPayeeChange.emit(this._selectedPayee);
    }
    @Output() public selectedPayeeChange = new EventEmitter<PayeeModel | null>();

    private _selectedAccount: AccountModel | null;
    @Input() public get selectedAccount() { return this._selectedAccount; }
    public set selectedAccount(value: AccountModel | null) {
        this._selectedAccount = value;

        this.selectedAccountChange.emit(this._selectedAccount);
    }
    @Output() public selectedAccountChange = new EventEmitter<AccountModel | null>();
}
