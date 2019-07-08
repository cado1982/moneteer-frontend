import { Injectable, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IEnvelopesState, getEnvelopes, getAvailable, getEnvelopeCategories } from 'src/app/core/reducers/envelopes.reducer';
import { EnvelopeModel, EnvelopeCategoryModel } from 'src/app/core/models';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EnvelopesDataService {
    public envelopeCategories$: Observable<EnvelopeCategoryModel[]>;
    public filteredEnvelopes$: Observable<EnvelopeModel[]>;
    public available: number;
    
    private searchQuery$: BehaviorSubject<string> = new BehaviorSubject<string>('');

    constructor(private store: Store<IEnvelopesState>) {
        this.store.select(getAvailable).subscribe(a => this.available = a);
        this.filteredEnvelopes$ = combineLatest(this.store.select(getEnvelopes), this.searchQuery$).pipe(
            map(([envelopes, searchFilter]) => {
                return envelopes.filter(e => searchFilter === '' || e.name.toUpperCase().includes(searchFilter.toUpperCase()));
            })
        )
        this.envelopeCategories$ = this.store.select(getEnvelopeCategories);
    }

    public filterEnvelopes(filter: string): void {
        this.searchQuery$.next(filter);
    }
}
