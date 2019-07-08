import { Component, OnInit } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { IEnvelopesState, getEnvelopeCategories } from 'src/app/core/reducers/envelopes.reducer';
import { EnvelopesDataService } from '../../services/envelopes-data.service';
import { EnvelopeCategoryModel } from 'src/app/core/models';
import { Observable } from 'rxjs';

@Component({
    selector: 'moneteer-envelopes-add-modal',
    templateUrl: './envelopes-add-modal.component.html',
    styleUrls: ['./envelopes-add-modal.component.scss']
})
export class EnvelopesAddModalComponent implements OnInit {
    public isOpen: boolean = false;
    public selectedEnvelopeCategory: EnvelopeCategoryModel | null;

    //public envelopeCategories$: Observable<EnvelopeCategoryModel[]>;

    constructor(
        private actions$: Actions,
        private store: Store<IEnvelopesState>,
        public dataService: EnvelopesDataService) {

    }

    ngOnInit() {
        //this.envelopeCategories$ = this.store.select(getEnvelopeCategories)
    }

    public open(): void {
        this.isOpen = true;
    }

    public close(): void {
        this.isOpen = false;
    }

    create(): void {

    }
}
