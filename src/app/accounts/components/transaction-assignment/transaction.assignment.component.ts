import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";

import { EnvelopeModel } from "../../../core/models/index";
import { TransactionAssignmentModel } from "../../models/index";

@Component({
    selector: "moneteer-transaction-assignment",
    templateUrl: "./transaction.assignment.component.html",
    styleUrls: ["./transaction.assignment.component.scss"],
    host: {"class": "transaction-row" }
})
export class TransactionAssignmentComponent {
    @Input() public assignment: TransactionAssignmentModel;
    @Input() public isEditing: boolean;
    @Input() public currentAccountId: string;

    public envelopes: Observable<Array<EnvelopeModel>>;

    private onInflowChanged(newValue: number): void {
        if (newValue !== 0) {
            this.assignment.outflow = 0;
        }
    }

    private onOutflowChanged(newValue: number): void {
        if (newValue !== 0) {
            this.assignment.inflow = 0;
        }
    }
}
