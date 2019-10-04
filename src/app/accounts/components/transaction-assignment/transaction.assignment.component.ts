import { Component, Input, Output, EventEmitter } from "@angular/core";

import { EnvelopeModel, GuidModel } from "../../../core/models/index";
import { TransactionAssignmentModel } from "../../models/transaction.assignment.model";

@Component({
    selector: "moneteer-transaction-assignment",
    templateUrl: "./transaction.assignment.component.html",
    styleUrls: ["./transaction.assignment.component.scss", './../../styles/transaction.scss']
})
export class TransactionAssignmentComponent {
    
    @Input() public assignment: TransactionAssignmentModel;
    @Input() public currentAccountId: string;
    @Input() public envelopes: EnvelopeModel[];
    @Output() public onDelete: EventEmitter<void> = new EventEmitter<void>();
    @Input() public inUseEnvelopeIds: string[] = [];

    public get inflow(): number | null {
        return this.assignment.inflow === 0 ? null : this.assignment.inflow;
    }
    public set inflow(newValue: number | null) {
        this.assignment.inflow = newValue === null ? 0 : newValue;
        if (newValue !== 0) {
            this.outflow = 0;
        }
    }

    public get outflow(): number | null {
        return this.assignment.outflow === 0 ? null : this.assignment.outflow;
    }
    public set outflow(newValue: number | null) {
        this.assignment.outflow = newValue === null ? 0 : newValue;
        if (newValue !== 0) {
            this.inflow = null;
        }
    }

    public delete(): void {
        this.onDelete.emit();
    }

}
