import { distinctUntilChanged, debounceTime, take } from "rxjs/operators";
import { Component, OnInit, Input,  } from "@angular/core";
import { Observable , Subject } from "rxjs";
import { Store, select } from "@ngrx/store";

import { TransactionModel, AccountModel } from "../../models/index";
import { ITransactionsState, getIsDeleting,
         getSelectedTransactions, CreateTransactionMode 
} from "../../../core/reducers/transactions.reducer";
import { ShowCreateTransactionAction } from "../../../core/actions/transactions.actions";
import { getAccounts } from "src/app/core/reducers/accounts.reducer";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TransactionDeleteModalComponent } from "../transaction-delete-modal/transaction-delete-modal.component";

@Component({
  selector: "moneteer-transaction-header",
  templateUrl: "./transaction.header.component.html",
  styleUrls: ["./transaction.header.component.scss"]
})
export class TransactionHeaderComponent implements OnInit {
    public transactionSearchTerm$ = new Subject<string>();
    public selectedTransactions$: Observable<TransactionModel[]>;
    public accounts$: Observable<AccountModel[]>;

    public isDeleting$: Observable<boolean>;

    @Input() public account: AccountModel | null;

    constructor(
        private store: Store<ITransactionsState>,
        private modalService: NgbModal
    ) { 

    }

    ngOnInit(): void {
        this.transactionSearchTerm$.pipe(debounceTime(400),distinctUntilChanged()).subscribe(t => console.log(t));

        this.isDeleting$ = this.store.pipe(select(getIsDeleting));
        this.selectedTransactions$ = this.store.pipe(select(getSelectedTransactions));

        this.accounts$ = this.store.pipe(select(getAccounts));      
    }

    public addInflow(): void {
        this.store.dispatch(new ShowCreateTransactionAction({mode: CreateTransactionMode.Inflow}));
    }

    public addOutflow(): void {
        this.store.dispatch(new ShowCreateTransactionAction({mode: CreateTransactionMode.Outflow}));
    }

    public tryDeleteTransactions(): void {
        this.store.select(getSelectedTransactions).pipe(take(1)).subscribe(transactions => {
            let modalRef = this.modalService.open(TransactionDeleteModalComponent);
            modalRef.componentInstance.selectedTransactions = transactions;
        })
        
    }
}
