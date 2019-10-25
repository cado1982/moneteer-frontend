import { Component, Input, EventEmitter, Output, ViewChild, ElementRef, OnInit } from '@angular/core';
import { PayeeModel } from '../../../core/models';
import { AccountModel } from '../../models';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'moneteer-payee-select-dropdown',
    templateUrl: './payee.select.dropdown.component.html',
    styleUrls: ['./payee.select.dropdown.component.scss']
})
export class PayeeSelectDropdownComponent implements OnInit {
    @Input() public disabled: boolean;
    @Input() public payees: PayeeModel[];
    @Input() public accounts: AccountModel[];
    @Input() public hideIds: string[] = [];
    public searchFilter: string;

    @ViewChild("searchInput", { static: true }) inputBox: ElementRef;

    public filteredPayees: PayeeModel[] = [];
    public filteredAccounts: AccountModel[] = [];

    private clickedPayee: PayeeModel | null;
    private clickedAccount: AccountModel | null;

    public searchFilterTerm$ = new BehaviorSubject<string>("");
    public scrollSelectedItemToTop = true;

    public highlightedItemId: string | null = null;
    
    private _selectedPayee: PayeeModel | null;
    @Input() public get selectedPayee() { return this._selectedPayee; }
    public set selectedPayee(value: PayeeModel | null) {
        this._selectedPayee = value;

        if (this._selectedPayee == null) {
            this.searchFilter = "";
            this.highlightedItemId = null;
        } else {
            this.selectedAccount = null;
            this.highlightedItemId = this._selectedPayee.id;
            this.searchFilter = "Payee: " + this._selectedPayee.name;
        }

        this.selectedPayeeChange.emit(this._selectedPayee);
    }
    @Output() public selectedPayeeChange = new EventEmitter<PayeeModel | null>();



    private _selectedAccount: AccountModel | null;
    @Input() public get selectedAccount() { return this._selectedAccount; }
    public set selectedAccount(value: AccountModel | null) {
        this._selectedAccount = value;

        if (this._selectedAccount == null) {
            this.searchFilter = "";
            this.highlightedItemId = null;
        } else {
            this.selectedPayee = null;
            this.highlightedItemId = this._selectedAccount.id;
            this.searchFilter = "Transfer to: " + this._selectedAccount.name;
        }

        this.selectedAccountChange.emit(this._selectedAccount);
    }
    @Output() public selectedAccountChange = new EventEmitter<AccountModel | null>();




    public isPayeeHighlighted(payee: PayeeModel): boolean {
        return this.highlightedItemId === payee.id;
    }

    public isAccountHighlighted(account: AccountModel): boolean {
        return this.highlightedItemId === account.id;
    }

    public payeeClicked(payee: PayeeModel): void {
        this.clickedPayee = payee;
        this.clickedAccount = null;
    }

    public accountClicked(account: AccountModel): void {
        this.clickedAccount = account;
        this.clickedPayee = null;
    }

    public onSearchInputBlur(event: FocusEvent): void {
        if (!!this.clickedPayee) {
            this.selectedPayee = this.clickedPayee;
            this.clickedPayee = null;
        } else if (!!this.clickedAccount) {
            this.selectedAccount = this.clickedAccount;
            this.clickedAccount = null;
        } else if (!this.searchFilter) {
            this.selectedPayee = null;
            this.selectedAccount = null;
        } else if (this.highlightedItemId) {
            const payee = this.payees.find(p => p.id === this.highlightedItemId);
            const account = this.accounts.find(a => a.id === this.highlightedItemId);

            if (payee !== undefined) {
                this.selectedPayee = payee;
            } else if (account !== undefined) {
                this.selectedAccount = account;
            }
        }
         else if (event && event.target) {
            let payee = new PayeeModel();
            payee.id = null;
            payee.name = (<HTMLInputElement>event.target).value;
            this.selectedPayee = payee;
            this.selectedAccount = null;
        }
    }

    public onSearchInputValueChanged(newValue: string): void {
        this.searchFilterTerm$.next(newValue);
    }

    public onSearchInputFocus($event: any): void {
        this.clickedPayee = null;
        this.clickedAccount = null;

        $event.target.select();

        this.searchFilterTerm$.next("");
    }

    public onSearchInputKeyUp($event: any): void {
        $event.stopPropagation();

        switch ($event.key) {
            case "ArrowDown":
                this.onDownPressed();
                break;
            case "ArrowUp":
                this.onUpPressed();
                break;
            case "Enter":
                this.onEnterPressed();
                break;
        }
    }

    private onDownPressed(): void {
        if (this.selectedPayee === null) {
            this.selectFirstItem();
            return;
        }

        this.scrollSelectedItemToTop = false;

        // Find which item is next and select it
        // If we're at the end of the list, move to the start
        const selectedIndex = this.filteredPayees.indexOf(this.selectedPayee)
        let nextIndex = selectedIndex + 1;

        if (nextIndex > this.filteredPayees.length - 1) { 
            nextIndex = 0; 
        }

        this.selectedPayee = this.filteredPayees[nextIndex];
    }

    private selectLastItem(): void {
        if (this.filteredPayees.length > 0) {
            const lastItemIndex = this.filteredPayees.length - 1;
            this.selectedPayee = this.filteredPayees[lastItemIndex];
        }
    }

    private selectFirstItem(): void {
        if (this.filteredPayees.length > 0) {
            this.selectedPayee = this.filteredPayees[0];
        }
    }

    private onUpPressed(): void {
        if (this.selectedPayee === null) {
            this.selectLastItem();
            return;
        }

        this.scrollSelectedItemToTop = true;

        // Find which item is next and select it
        // If we're at the end of the list, move to the start
        const selectedIndex = this.filteredPayees.indexOf(this.selectedPayee)
        let newIndex = selectedIndex - 1;

        if (newIndex < 0) { 
            newIndex = this.filteredPayees.length - 1; 
        }

        this.selectedPayee = this.filteredPayees[newIndex];
    }

    private onEnterPressed(): void {
        this.inputBox.nativeElement.blur();
    }

    ngOnInit(): void {
        this.searchFilterTerm$.subscribe(searchTerm => {
            this.filteredPayees = this.payees.filter(p =>
                (!this.hideIds || (p.id !== null && this.hideIds.indexOf(p.id) === -1)) &&
                (searchTerm === "" || p.name.toLowerCase().includes(searchTerm.toLowerCase()))
            ).sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                } else if (a.name < b.name) {
                    return -1;
                } else {
                    return 0;
                }
            });

            this.filteredAccounts = this.accounts.filter(p =>
                (!this.hideIds || this.hideIds.indexOf(p.id) === -1) &&
                (searchTerm === "" || p.name.toLowerCase().includes(searchTerm.toLowerCase()))
            ).sort((a, b) => {
                if (a.name > b.name) {
                    return 1;
                } else if (a.name < b.name) {
                    return -1;
                } else {
                    return 0;
                }
            });

            if (searchTerm === "") {
                this.highlightedItemId = null;
            } else {
                if (this.filteredAccounts.length > 0) {
                    this.highlightedItemId = this.filteredAccounts[0].id;
                } else if (this.filteredPayees.length > 0) {
                    this.highlightedItemId = this.filteredPayees[0].id;
                }
            }
        });
    }
}
