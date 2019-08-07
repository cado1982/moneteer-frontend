import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EnvelopeCategoryModel } from 'src/app/core/models';

@Component({
    selector: 'moneteer-envelope-category-select-dropdown',
    templateUrl: './envelope-category-select-dropdown.component.html',
    styleUrls: ['./envelope-category-select-dropdown.component.scss']
})
export class EnvelopeCategorySelectDropdownComponent {
    @Input() public disabled: boolean;
    @Input() public envelopeCategories: EnvelopeCategoryModel[];
    
    private _selectedEnvelopeCategory: EnvelopeCategoryModel | null;
    @Input() public get selectedEnvelopeCategory() { return this._selectedEnvelopeCategory; }
    public set selectedEnvelopeCategory(value: EnvelopeCategoryModel | null) {
        this._selectedEnvelopeCategory = value;

        this.selectedEnvelopeCategoryChange.emit(this._selectedEnvelopeCategory);
    }
    @Output() public selectedEnvelopeCategoryChange = new EventEmitter<EnvelopeCategoryModel | null>();

    public addNewCategory(): void {

    }

}
