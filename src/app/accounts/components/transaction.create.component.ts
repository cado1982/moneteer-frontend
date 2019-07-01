import { OnInit } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { AccountModel } from "../models";
import { PayeeModel } from "../../core/models";
import { EnvelopeModel } from "../../core/models/envelope.model";
import { Store } from "@ngrx/store";
import { ITransactionsState, getIsCreating } from "../../core/reducers/transactions.reducer";
import { getAccounts } from "../../core/reducers/accounts.reducer";
import { getEnvelopes } from "../../core/reducers/envelopes.reducer";
import { getPayees } from "../../core/reducers/transactions.reducer";
import { Input } from "@angular/core";

export abstract class TransactionCreateComponent implements OnInit {
    @Input() public currentAccountId: string;
    public date: Date = new Date();
    public account: AccountModel | undefined;
    public payee: PayeeModel | undefined;
    public description: string = "";
    public isCleared: boolean = false;

    public accounts$: Observable<Array<AccountModel>>;
    public payees$: Observable<Array<PayeeModel>>;
    public envelopes$: Observable<Array<EnvelopeModel>>;

    public isBusy$: Observable<boolean>;

    constructor(protected store: Store<ITransactionsState>) {
        
    }

    ngOnInit(): void {
        this.accounts$ = this.store.select(getAccounts);
        this.envelopes$ = this.store.select(getEnvelopes);
        this.payees$ = this.store.select(getPayees);
        this.isBusy$ = this.store.select(getIsCreating);

    }

    abstract canCreate(): boolean;
    abstract create(): void;
    abstract cancel(): void
}