import { Component, OnInit } from '@angular/core';
import { EnvelopeModel, EnvelopeCategoryModel } from 'src/app/core/models';
import { AssignIncomeService } from '../../services/assign-income.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { groupBy, sortBy } from 'lodash';

@Component({
    selector: 'moneteer-assign-income-envelope-list',
    templateUrl: './envelope-list.component.html',
    styleUrls: ['./envelope-list.component.scss']
})
export class EnvelopeListComponent implements OnInit {
    public groupedEnvelopes$: Observable<{category: EnvelopeCategoryModel, envelopes: EnvelopeModel[]}[]>;

    constructor(public service: AssignIncomeService) {

    }

    ngOnInit() {
        this.groupedEnvelopes$ = this.service.envelopes$.pipe(
            map(e => {
                const grouped = groupBy(e, "envelopeCategory.id")
                const toArray = Object.entries(grouped)
                let result = toArray.map(([groupName, envelopes]) => {
                    return {
                        category: envelopes[0].envelopeCategory,
                        envelopes: sortBy(envelopes, "name")
                    }
                });

                return sortBy(result, "category.name");
            }
        ));
    }

}
