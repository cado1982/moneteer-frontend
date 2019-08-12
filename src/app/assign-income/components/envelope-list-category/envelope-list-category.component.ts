import { Component, OnInit, Input } from '@angular/core';
import { EnvelopeCategoryModel, EnvelopeModel } from 'src/app/core/models';

@Component({
    selector: 'moneteer-assign-income-envelope-list-category',
    templateUrl: './envelope-list-category.component.html',
    styleUrls: ['./envelope-list-category.component.scss']
})
export class EnvelopeListCategoryComponent implements OnInit {
    @Input() public category: EnvelopeCategoryModel;
    @Input() public envelopes: EnvelopeModel[];
    
    constructor() { }

    ngOnInit() {
    }

}
