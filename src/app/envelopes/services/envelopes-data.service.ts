import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IEnvelopesState, getAvailableIncomeEnvelope, getEnvelopeCategories, getAllEnvelopes } from 'src/app/core/reducers/envelopes.reducer';
import { EnvelopeModel, EnvelopeCategoryModel } from 'src/app/core/models';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { sortBy } from "lodash";

@Injectable()
export class EnvelopesDataService {
    public envelopeCategories$: Observable<EnvelopeCategoryModel[]>;
    public envelopesByCategory$: Observable<{ category: EnvelopeCategoryModel, envelopes: EnvelopeModel[], isVisible: boolean }[]>;
    public available: number;
    
    private searchQuery$: BehaviorSubject<string> = new BehaviorSubject<string>('');

    constructor(private store: Store<IEnvelopesState>) {
        this.store.select(getAvailableIncomeEnvelope).pipe(map(e => !e ? 0 : e.balance)).subscribe(a => this.available = a);
        this.envelopeCategories$ = this.store.select(getEnvelopeCategories);
        this.envelopesByCategory$ = combineLatest(this.store.select(getAllEnvelopes), this.searchQuery$, this.envelopeCategories$).pipe(
            map(([envelopes, searchFilter, categories]) => {
                const grouped = categories.map(c =>  {
                    return { 
                        "category": c,
                        "envelopes": sortBy(envelopes.filter(e => 
                            e.envelopeCategory.id === c.id &&
                            !e.isHidden &&
                            (searchFilter === '' ||
                             e.name.toUpperCase().includes(searchFilter.toUpperCase()))
                        ), "name"),
                        "isVisible": true
                    }
                });

                const hiddenEnvelopes = envelopes.filter(e => e.isHidden);

                if (hiddenEnvelopes.length > 0) {
                    grouped.push({category: new EnvelopeCategoryModel("Hidden"), envelopes: hiddenEnvelopes, isVisible: false});
                }

                return grouped.sort((a, b) => {
                    if (a.category.name > b.category.name || a.category.name === "Hidden") {
                        return 1;
                    } else if (a.category.name < b.category.name) {
                        return -1;
                    } else {
                        return 0;
                    }
                });
            })
        )
    }

    public filterEnvelopes(filter: string): void {
        this.searchQuery$.next(filter);
    }
}
