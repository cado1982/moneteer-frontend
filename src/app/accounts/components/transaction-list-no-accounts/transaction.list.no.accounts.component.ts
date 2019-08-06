import { Component } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AccountCreateComponent } from "src/app/budget/components/account-create/account.create.component";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: "moneteer-transaction-list-no-accounts",
    templateUrl: "./transaction.list.no.accounts.component.html",
    styleUrls: ["./transaction.list.no.accounts.component.scss"],
    
})
export class TransactionListNoAccountsComponent {

    constructor(
        private modalService: NgbModal,
        private activatedRoute: ActivatedRoute) { }

    public createAccount(): void {
        let modalRef = this.modalService.open(AccountCreateComponent);
        modalRef.componentInstance.budgetId = this.activatedRoute.snapshot.parent!.parent!.parent!.params.budgetId;
    }
}
