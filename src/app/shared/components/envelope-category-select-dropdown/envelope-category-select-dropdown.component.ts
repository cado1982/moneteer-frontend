import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { EnvelopeCategoryModel } from 'src/app/core/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { DropdownComponent } from '..';
import { map, groupBy } from 'rxjs/operators';

@Component({
    selector: 'moneteer-envelope-category-select-dropdown',
    templateUrl: './envelope-category-select-dropdown.component.html',
    styleUrls: ['./envelope-category-select-dropdown.component.scss']
})
export class EnvelopeCategorySelectDropdownComponent implements OnInit {
    @Input() public envelopeCategories: EnvelopeCategoryModel[];
    
    public filteredEnvelopeCategories$: Observable<EnvelopeCategoryModel[]>;
    private clickedEnvelopeCategory: EnvelopeCategoryModel | null;

    private _selectedEnvelopeCategory: EnvelopeCategoryModel | null;
    @Input() public get selectedEnvelopeCategory() { return this._selectedEnvelopeCategory; }
    public set selectedEnvelopeCategory(value: EnvelopeCategoryModel | null) {
        this._selectedEnvelopeCategory = value;

        if (this._selectedEnvelopeCategory == null) {
            this.searchFilter = ""
        } else {
            this.searchFilter = this._selectedEnvelopeCategory.name
        }

        this.selectedEnvelopeCategoryChange.emit(this._selectedEnvelopeCategory);
    }
    @Output() public selectedEnvelopeCategoryChange = new EventEmitter<EnvelopeCategoryModel | null>();

    public searchFilter: string;
    public searchFilterTerm$: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public isCreatingNewEnvelopeCategory$: Observable<boolean>;
    
    private _highlightedEnvelopeCategory: EnvelopeCategoryModel | null = null;
    public get highlightedEnvelopeCategory(): EnvelopeCategoryModel | null {
        return this._highlightedEnvelopeCategory;
    }
    public set highlightedEnvelopeCategory(value: EnvelopeCategoryModel | null) {
        this._highlightedEnvelopeCategory = value;
        this.scrollToHighlightedEnvelopeCategory();
    }

    private scrollToHighlightedEnvelopeCategory(): void {
        if (!this.envelopeCategoryElements) return;
        if (!this.highlightedEnvelopeCategory) return;

        const elements = this.envelopeCategoryElements.filter(e => e.nativeElement.id === this.highlightedEnvelopeCategory!.id);

        if (!!elements && elements.length > 0) {
            elements[0].nativeElement.scrollIntoView(false);
        }
    }

    @ViewChild(DropdownComponent, { static: false }) public dropDown: DropdownComponent;
    @ViewChild("searchInput", { static: false }) inputBox: ElementRef;
    @ViewChildren("envelopeCategoryElement") envelopeCategoryElements: QueryList<ElementRef>;

    ngOnInit(): void {
        this.filteredEnvelopeCategories$ = this.searchFilterTerm$.pipe(
            map(searchTerm => {
                const filteredEnvelopeCategories = this.envelopeCategories.filter(p => searchTerm === "" || p.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
                
                this.highlightedEnvelopeCategory = filteredEnvelopeCategories.length === 0 ? null : filteredEnvelopeCategories[0]    

                return filteredEnvelopeCategories
            })
        )
        
        // this.isCreatingNewEnvelopeCategory$ = this.searchFilterTerm$.pipe(
        //     map(searchTerm => {
        //         return this.envelopeCategories.some filter(p => searchTerm === "" || p.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
        //     }
        // );

        this.searchFilterTerm$.subscribe(term => {
            if (term !== "") {
                this.selectFirstItem();
            }
        })
    }

    private onDownPressed(): void {
        if (this.highlightedEnvelopeCategory === null) return;

        const highlightedIndex = this.envelopeCategories.indexOf(this.highlightedEnvelopeCategory)
        const nextIndex = highlightedIndex + 1;

        if (nextIndex > this.envelopeCategories.length - 1) { return } // Already at end of array

        const nextItem = this.envelopeCategories[nextIndex]
        this.highlightedEnvelopeCategory = nextItem;
    }

    private onUpPressed(): void {
        if (this.highlightedEnvelopeCategory === null) return;

        const highlightedIndex = this.envelopeCategories.indexOf(this.highlightedEnvelopeCategory)
        const previousIndex = highlightedIndex - 1;

        if (previousIndex < 0) { return } // Already at end of array

        const previousItem = this.envelopeCategories[previousIndex]
        this.highlightedEnvelopeCategory = previousItem;
    }

    private onEnterPressed(): void {
        this.selectedEnvelopeCategory = this.highlightedEnvelopeCategory;
        this.inputBox.nativeElement.blur();
    }

    public onSearchInputBlur(): void {
        if (!!this.clickedEnvelopeCategory) {
            this.selectedEnvelopeCategory = this.clickedEnvelopeCategory;
            this.clickedEnvelopeCategory = null;
        } else if (!!this.highlightedEnvelopeCategory) {
            this.selectedEnvelopeCategory = this.highlightedEnvelopeCategory;
        }
    }

    public onSearchInputFocus($event: any): void {
        console.log('Clearing clicked');
        this.clickedEnvelopeCategory = null;

        $event.target.select();

        this.searchFilterTerm$.next("");
        if (this.selectedEnvelopeCategory !== null) {
            this.highlightedEnvelopeCategory = this.selectedEnvelopeCategory
        }
        
    }

    public onSearchInputValueChanged(newValue: string): void {
        console.log('valueChanged')
        this.searchFilterTerm$.next(newValue);
    }

    public onSearchInputKeyUp($event: any): void {
        $event.stopPropagation();

        switch ($event.key) {
            case "ArrowDown":
                this.onDownPressed();
                break;
            case "ArrowUp":
                this.onUpPressed();
                break;
            case "Enter":
                this.onEnterPressed();
                break;
        }
    }

    public envelopeCategoryClicked(envelopeCategory: EnvelopeCategoryModel): void {
        this.clickedEnvelopeCategory = envelopeCategory;
    }

    public createEnvelope(): void {

    }

    private selectFirstItem(): void {

    }

}
