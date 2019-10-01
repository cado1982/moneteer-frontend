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

    public get inflow(): number {
        return this.assignment.inflow;
    }
    public set inflow(newValue: number) {
        this.assignment.inflow = newValue;
        if (newValue !== 0) {
            this.outflow = 0;
        }
    }

    public get outflow(): number {
        return this.assignment.outflow;
    }
    public set outflow(newValue: number) {
        this.assignment.outflow = newValue;
        if (newValue !== 0) {
            this.inflow = 0;
        }
    }

    public delete(): void {
        this.onDelete.emit();
    }

    public get errors(): string[] {
        let errors: string[] = [];

        if (!this.inflowOrOutflowGreaterThanZero()) {
            errors.push("Inflow or outflow must be set");
        }

        return errors;
    }

    public get isValid(): boolean {
        return !!this.assignment &&
               this.inflowOrOutflowGreaterThanZero() &&
               this.envelopeIsSet();
    }

    private inflowOrOutflowGreaterThanZero(): boolean {
        return this.assignment.inflow > 0 || this.assignment.outflow > 0;
            
    }

    private envelopeIsSet(): boolean {
        return !!this.assignment.envelope && 
            this.assignment.envelope.id !== GuidModel.empty;
    }
}
