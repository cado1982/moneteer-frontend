import { Component, OnInit, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IEnvelopesState, getAvailableIncomeEnvelope, getSelectedEnvelope, getEnvelopeCategories } from 'src/app/core/reducers/envelopes.reducer';
import { EnvelopeModel, EnvelopeCategoryModel } from 'src/app/core/models';

@Component({
    selector: 'moneteer-envelope-details',
    templateUrl: './envelope-details.component.html',
    styleUrls: ['./envelope-details.component.scss']
})
export class EnvelopeDetailsComponent implements OnInit {
    public availableIncomeEnvelope$: Observable<EnvelopeModel>;
    public selectedEnvelope$: Observable<EnvelopeModel | undefined>;

    constructor(private store: Store<IEnvelopesState>) { }

    ngOnInit() {
        this.availableIncomeEnvelope$ = this.store.select(getAvailableIncomeEnvelope);
        this.selectedEnvelope$ = this.store.select(getSelectedEnvelope);
    }
}
