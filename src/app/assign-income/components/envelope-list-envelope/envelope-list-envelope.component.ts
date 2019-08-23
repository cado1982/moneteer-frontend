import { Component, OnInit, Input } from '@angular/core';
import { EnvelopeModel, EnvelopeBalanceTarget } from 'src/app/core/models';
import { AssignIncomeService } from '../../services/assign-income.service';

@Component({
    selector: 'moneteer-assign-income-envelope-list-envelope',
    templateUrl: './envelope-list-envelope.component.html',
    styleUrls: ['./envelope-list-envelope.component.scss'],
    host: {
        "class": "align-items-center"
    }
})
export class EnvelopeListEnvelopeComponent implements OnInit {
    @Input() public envelope: EnvelopeModel;

    private _assigned: number = 0;
    public get assigned(): number {
        return this._assigned;
    }
    public set assigned(newValue: number) {
        this._assigned = newValue;
        this.balance = this.envelope.balance + newValue;
        const model = new EnvelopeBalanceTarget(this.envelope.id, newValue);
        this.service.assignments$.next(model);
    }
    public balance: number;

    constructor(private service: AssignIncomeService) { }

    ngOnInit() {
        this.balance = !this.envelope ? 0 : this.envelope.balance;
    }

    onAssignedChanged() {
        this.balance = this.envelope.balance + this.assigned;
        const model = new EnvelopeBalanceTarget(this.envelope.id, this.assigned);
        this.service.assignments$.next(model);
    }
}
