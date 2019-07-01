import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { PayeeModel } from '../../../core/models';
import { DropdownComponent } from '../../../shared/components';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'moneteer-payee-select-dropdown',
    templateUrl: './payee.select.dropdown.component.html',
    styleUrls: ['./payee.select.dropdown.component.scss']
})
export class PayeeSelectDropdownComponent implements OnInit {
    
    @Input() public payees: PayeeModel[];

    private _selectedPayee: PayeeModel | undefined;
    @Input() public get selectedPayee() { return this._selectedPayee; }
    public set selectedPayee(value: PayeeModel | undefined) {
        this._selectedPayee = value;
        this.searchFilter = this._selectedPayee ? this._selectedPayee.name : "";
        this.selectedPayeeChange.emit(this._selectedPayee);
    }
    @Output() public selectedPayeeChange = new EventEmitter<PayeeModel>();

    public searchFilter: string;
    public searchFilterTerm$: Subject<string> = new Subject<string>();
    public isCreatingNewPayee$: Observable<boolean>; 

    @ViewChild(DropdownComponent, {static: false}) public dropDown: DropdownComponent;

    ngOnInit(): void {
        this.isCreatingNewPayee$ = this.searchFilterTerm$.pipe(
            map(term => !this.payees.some(p => p.name.toLowerCase() === term.toLowerCase()))
        );
    }


    public onSearchInputBlur($event: { target: { value: string }}): void {
        
        const newPayee: string = $event.target.value;
        const payee = !this.payees ? null : this.payees.find(a => a.name.toLowerCase() === newPayee.toLowerCase());
        if (payee) {
            this.selectedPayee = payee;
        } else if (!this.searchFilter) {
            this.selectedPayee = undefined;
        } else {
            this.selectedPayee = new PayeeModel(this.searchFilter);
        }
    }

    public onSearchInputFocus($event: any): void {
        $event.target.select();
        this.searchFilterTerm$.next("");
    }

    public payeeClicked(payee: PayeeModel): void {
        this.selectedPayee = payee;
    }

}
