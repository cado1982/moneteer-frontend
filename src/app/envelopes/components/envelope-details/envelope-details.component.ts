import { Component, OnInit, HostBinding } from '@angular/core';
import { EnvelopesSelectionService } from '../../services/envelopes-selection.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IEnvelopesState, getAvailableIncomeEnvelope } from 'src/app/core/reducers/envelopes.reducer';
import { EnvelopeModel } from 'src/app/core/models';

@Component({
    selector: 'moneteer-envelope-details',
    templateUrl: './envelope-details.component.html',
    styleUrls: ['./envelope-details.component.scss']
})
export class EnvelopeDetailsComponent implements OnInit {

    @HostBinding('class.hidden') get isHidden() { return !this.selectionService.selectedEnvelope.value; }

    public availableIncomeEnvelope$: Observable<EnvelopeModel>;

    constructor(public selectionService: EnvelopesSelectionService, private store: Store<IEnvelopesState>) { }

    ngOnInit() {
        this.availableIncomeEnvelope$ = this.store.select(getAvailableIncomeEnvelope);
    }

}
