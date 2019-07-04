import { Component, OnInit, Input } from '@angular/core';
import { EnvelopeModel } from 'src/app/core/models';
import { AssignIncomeService } from '../../services/assign-income.service';
import { AssignIncome } from 'src/app/core/models/assign.income.request';

@Component({
    selector: 'moneteer-assign-income-envelope-list-envelope',
    templateUrl: './envelope-list-envelope.component.html',
    styleUrls: ['./envelope-list-envelope.component.scss']
})
export class EnvelopeListEnvelopeComponent implements OnInit {
    @Input() public envelope: EnvelopeModel;
    public assigned: number;
    public balance: number;

    constructor(private service: AssignIncomeService) { }

    ngOnInit() {
        this.balance = this.envelope.balance;
    }

    onAssignedChanged() {
        this.balance = this.envelope.balance + this.assigned;
        const model = new AssignIncome(this.envelope, this.assigned);
        this.service.updateAssignment(model);
    }
}
