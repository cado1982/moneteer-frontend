import { Injectable, OnInit, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IEnvelopesState, getEnvelopes, getAvailable, getEnvelopeCategories } from 'src/app/core/reducers/envelopes.reducer';
import { EnvelopeModel, EnvelopeCategoryModel } from 'src/app/core/models';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class EnvelopesDataService {
    public envelopeCategories$: Observable<EnvelopeCategoryModel[]>;
    public envelopesByCategory$: Observable<{ category: EnvelopeCategoryModel, envelopes: EnvelopeModel[] }[]>;
    public available: number;
    
    private searchQuery$: BehaviorSubject<string> = new BehaviorSubject<string>('');

    constructor(private store: Store<IEnvelopesState>) {
        this.store.select(getAvailable).subscribe(a => this.available = a);
        this.envelopeCategories$ = this.store.select(getEnvelopeCategories);
        this.envelopesByCategory$ = combineLatest(this.store.select(getEnvelopes), this.searchQuery$, this.envelopeCategories$).pipe(
            map(([envelopes, searchFilter, categories]) => {
                return categories.map(c =>  {
                    return { 
                        "category": c,
                        "envelopes": envelopes.filter(e => 
                            e.envelopeCategory.id === c.id &&
                            (searchFilter === '' ||
                             e.name.toUpperCase().includes(searchFilter.toUpperCase())
                            )
                        )
                    }
                })
            })
        )
        
    }

    public filterEnvelopes(filter: string): void {
        this.searchQuery$.next(filter);
    }
}
