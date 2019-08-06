import { Component, OnInit, Input, ElementRef, Output, EventEmitter, ViewChildren, QueryList, ViewChild, ContentChildren, TemplateRef } from '@angular/core';
import { DropdownComponent } from '..';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { groupBy, get } from 'lodash';


@Component({
    selector: 'moneteer-dropdown-list',
    templateUrl: './dropdown-list.component.html',
    styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent<T> implements OnInit {

    @Input() public items: T[] = [];
    @Input('groupBy') public groupByProperty: string;
    @Input() public itemDisplayProperty: string = "name";
    @Input() public idProperty: string = "id";
    @Input() public searchFilter: string;
    @Input() public disabled: boolean = false;

    @Input() public itemTemplate: TemplateRef<any>;
    @Input() public headerTemplate: TemplateRef<any>;

    public searchFilterTerm$ = new BehaviorSubject<string>("");
    public filteredItems: T[] = [];
    public groupedItems: { groupName: string, items: T[] }[]
    private clickedItem: T | null;

    @ViewChildren("itemElement") itemElements: QueryList<ElementRef>;
    @ViewChild("searchInput", { static: true }) inputBox: ElementRef;

    private _selectedItem: T | null;
    @Input() public get selectedItem() { return this._selectedItem; }
    public set selectedItem(value: T | null) {
        this._selectedItem = value;

        if (this._selectedItem == null) {
            this.searchFilter = ""
        } else {
            this.searchFilter = this._selectedItem[this.itemDisplayProperty]
        }

        this.selectedItemChange.emit(this._selectedItem);
    }
    @Output() public selectedItemChange = new EventEmitter<T | null>();

    private _highlightedItem: T | null = null;
    public get highlightedItem(): T | null {
        return this._highlightedItem;
    }
    public set highlightedItem(value: T | null) {
        this._highlightedItem = value;
        //this.scrollToHighlightedItem();
    }

    private scrollToHighlightedItem(): void {
        if (!this.highlightedItem || !this.itemElements) return;

        const elements = this.itemElements.filter(e => e.nativeElement.id === this.highlightedItem![this.idProperty]);

        if (!!elements && elements.length > 0) {
            elements[0].nativeElement.scrollIntoView(false);
        }
    }

    public itemClicked(item: T): void {
        this.clickedItem = item;
    }

    private onDownPressed(): void {
        if (this.highlightedItem === null) return;

        const highlightedIndex = this.items.indexOf(this.highlightedItem)
        const nextIndex = highlightedIndex + 1;

        if (nextIndex > this.items.length - 1) { return } // Already at end of array

        const nextItem = this.items[nextIndex]
        this.highlightedItem = nextItem;
    }

    private onUpPressed(): void {
        if (this.highlightedItem === null) return;

        const highlightedIndex = this.items.indexOf(this.highlightedItem)
        const previousIndex = highlightedIndex - 1;

        if (previousIndex < 0) { return } // Already at start of array

        const previousItem = this.items[previousIndex]
        this.highlightedItem = previousItem;
    }

    private onEnterPressed(): void {
        this.selectedItem = this.highlightedItem;
        this.inputBox.nativeElement.blur();
    }

    public isItemHighlighted(item: T): boolean {
        return !!this.highlightedItem && item[this.idProperty] === this.highlightedItem[this.idProperty];
    }

    public onSearchInputBlur(): void {
        if (!!this.clickedItem) {
            this.selectedItem = this.clickedItem;
            this.clickedItem = null;
        } else if (!!this.highlightedItem) {
            this.selectedItem = this.highlightedItem;
        }
    }

    public onSearchInputValueChanged(newValue: string): void {
        this.searchFilterTerm$.next(newValue);
    }

    public onSearchInputFocus($event: any): void {
        this.clickedItem = null;

        $event.target.select();

        this.searchFilterTerm$.next("");
        if (this.selectedItem !== null) {
            this.highlightedItem = this.selectedItem
        }

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

    ngOnInit() {
        this.searchFilterTerm$.subscribe(searchTerm => {
            this.filteredItems = this.items.filter(p => searchTerm === "" || p[this.itemDisplayProperty].toLowerCase().includes(searchTerm.toLowerCase()))

            if (!!this.groupByProperty) {
                const grouped = groupBy(this.filteredItems, n => get(n, this.groupByProperty))
                const toArray = Object.entries(grouped)
                this.groupedItems = toArray.map(([groupName, items]) => {
                    return {
                        groupName,
                        items: items.filter(p => searchTerm === "" || p[this.itemDisplayProperty].toLowerCase().contains(searchTerm.toLowerCase()))
                    }
                });

                if (this.groupedItems.length > 0 && this.groupedItems[0].items.length > 0) {
                    this.highlightedItem = this.groupedItems[0].items[0];
                }
            } else {
                if (this.filteredItems.length > 0) {
                    this.highlightedItem = this.filteredItems[0];
                }       
            }
        });
    }
}
