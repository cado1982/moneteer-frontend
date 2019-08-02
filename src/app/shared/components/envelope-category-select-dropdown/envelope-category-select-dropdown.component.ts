import { Component, OnInit, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
import { EnvelopeCategoryModel } from 'src/app/core/models';
import { DropdownListComponent } from '../dropdown-list/dropdown-list.component';

@Component({
    selector: 'moneteer-envelope-category-select-dropdown',
    templateUrl: './envelope-category-select-dropdown.component.html',
    styleUrls: ['./envelope-category-select-dropdown.component.scss']
})
export class EnvelopeCategorySelectDropdownComponent {
    @Input() public envelopeCategories: EnvelopeCategoryModel[];
    @Input() public selectedEnvelopeCategory: EnvelopeCategoryModel;
    @Output() public selectedEnvelopeCategoryChange = new EventEmitter<EnvelopeCategoryModel>();

    public addNewCategory(): void {

    }

    

    

    

    

}
