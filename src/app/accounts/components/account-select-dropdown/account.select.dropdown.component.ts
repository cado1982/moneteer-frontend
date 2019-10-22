import { Component, Input, Output, EventEmitter } from '@angular/core';

import { AccountModel } from '../../models';

@Component({
    selector: 'moneteer-account-select-dropdown',
    templateUrl: './account.select.dropdown.component.html',
    styleUrls: ['./account.select.dropdown.component.scss']
})
export class AccountSelectDropdownComponent {
    @Input() public disabled: boolean;
    @Input() public accounts: AccountModel[];
    @Input() public inputSize: string;

    private _selectedAccount: AccountModel | null;
    @Input() public get selectedAccount() { return this._selectedAccount; }
    public set selectedAccount(value: AccountModel | null) {
        this._selectedAccount = value;

        this.selectedAccountChange.emit(this._selectedAccount);
    }
    @Output() public selectedAccountChange = new EventEmitter<AccountModel | null>();
}
