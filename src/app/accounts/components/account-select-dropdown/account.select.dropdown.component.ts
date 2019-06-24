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
export class AccountSelectDropdownComponent implements OnChanges {
    
    @Input() public accounts: AccountModel[];

    private _selectedAccount: AccountModel | null;
    @Input() public get selectedAccount() { return this._selectedAccount; }
    public set selectedAccount(value: AccountModel | null) { 
        this._selectedAccount = value;
        this.selectedAccountChange.emit(this._selectedAccount);
    }
    @Output() public selectedAccountChange = new EventEmitter<AccountModel | null>();


    public searchFilter: string;
    public searchFilterTerm$: Subject<string> = new Subject<string>();

    @ViewChild(DropdownComponent, {static: false}) public dropDown: DropdownComponent;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.selectedAccount) {
            this.searchFilter = changes.selectedAccount.currentValue ? changes.selectedAccount.currentValue.name : "";
        }
    }

    public onSearchInputBlur($event: { target: { value: string }}): void {
        const newAccount: string = $event.target.value;
        const account = !this.accounts ? null : this.accounts.find(a => a.name.toLowerCase() === newAccount.toLowerCase());
        if (account) {
            this.searchFilter = account.name;
            this.selectedAccount = account;
        } else {
            this.selectedAccount = null;
            this.searchFilter = '';
        }
    }

    public onSearchInputFocus($event: any): void {
        $event.target.select();
        this.searchFilterTerm$.next("");
    }

    public accountClicked(account: AccountModel): void {
        this.selectedAccount = account;
    }
}
