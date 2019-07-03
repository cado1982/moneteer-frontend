import { Component, Input, OnInit } from "@angular/core";

import * as _ from "lodash";

import { AccountModel } from "../../models/index";

import { Observable } from "rxjs";

@Component({
  selector: "moneteer-transaction-footer",
  templateUrl: "./transaction.footer.component.html",
  styleUrls: ["./transaction.footer.component.scss"]
})
export class TransactionFooterComponent implements OnInit {
    @Input() public account: Observable<AccountModel>;
    
    ngOnInit(): void {
        
    }
}
