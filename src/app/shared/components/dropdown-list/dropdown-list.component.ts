import {
    Component, OnInit, Input, ElementRef, Output, EventEmitter,
    ViewChildren, QueryList, ViewChild, TemplateRef
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { groupBy, get } from 'lodash';
import scrollIntoView from 'scroll-into-view-if-needed';

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
    @Input() public allowsNewItems: boolean = false;
    @Input() public inputSize: string = "xs";

    @Input() public itemTemplate: TemplateRef<any>;
    @Input() public headerTemplate: TemplateRef<any>;
    @Input() public noItemsTemplate: TemplateRef<any>;

    @Input() public hideIds: string[] = [];

    public searchFilterTerm$ = new BehaviorSubject<string>("");
    public filteredItems: T[] = [];
    public groupedItems: { groupName: string, items: T[] }[]
    private clickedItem: T | null;

    public scrollSelectedItemToTop = true;

    @ViewChildren("itemElement") itemElements: QueryList<ElementRef>;
    @ViewChild("searchInput", { static: true }) inputBox: ElementRef;

    private _selectedItem: T | null;
    @Input() public get selectedItem() { return this._selectedItem; }
    public set selectedItem(value: T | null) {
        this._selectedItem = value;

        if (this._selectedItem == null) {
            this.searchFilter = "";
        } else {
            this.searchFilter = this._selectedItem[this.itemDisplayProperty];
        }

        this.scrollToSelectedItem();

        this.selectedItemChange.emit(this._selectedItem);
    }
    @Output() public selectedItemChange = new EventEmitter<T | null>();

    private scrollToSelectedItem(): void {
        if (!this.selectedItem || !this.itemElements) return;

        const elements = this.itemElements.filter(e => e.nativeElement.id === this.selectedItem![this.idProperty]);

        if (!!elements && elements.length > 0) {
            scrollIntoView(elements[0].nativeElement, {
                scrollMode: 'if-needed',
                block: this.scrollSelectedItemToTop ? 'start' : 'end'
            });
        }
    }

    public itemClicked(item: T): void {
        this.clickedItem = item;
    }

    private selectFirstItem(): void {
        if (this.groupByProperty && this.groupedItems.length > 0 && this.groupedItems[0].items.length > 0) {
            this.selectedItem = this.groupedItems[0].items[0]
        }
        if (this.filteredItems.length > 0) {
            this.selectedItem = this.filteredItems[0]
        }
    }

    private selectLastItem(): void {
        if (this.groupByProperty && this.groupedItems.length > 0 && this.groupedItems[this.groupedItems.length - 1].items.length > 0) {
            const lastGroupIndex = this.groupedItems.length - 1;
            const lastItemIndex = this.groupedItems[lastGroupIndex].items.length - 1;
            this.selectedItem = this.groupedItems[lastGroupIndex].items[lastItemIndex]
        }
        if (this.filteredItems.length > 0) {
            const lastItemIndex = this.filteredItems.length - 1;
            this.selectedItem = this.filteredItems[lastItemIndex];
        }
    }

    private onDownPressed(): void {
        if (this.selectedItem === null) {
            this.selectFirstItem();
            return;
        }

        this.scrollSelectedItemToTop = false;

        if (this.groupByProperty) {
            // Find out which group the item is in and then move down one item in the group
            // If we're at the end of the group move to the next one
            // If we're at the last group, move back to the first one
            for (let groupIndex = 0; groupIndex < this.groupedItems.length; groupIndex++) {
                const group = this.groupedItems[groupIndex];
                let selectedItemIndex = -1;
                for (let itemIndex = 0; itemIndex < group.items.length; itemIndex++) {
                    const thisItem = group.items[itemIndex];
                    
                    if (thisItem[this.idProperty] === this.selectedItem[this.idProperty]) {
                        selectedItemIndex = itemIndex;
                        break;
                    }
                }

                if (selectedItemIndex > -1) {
                    let newItemIndex = selectedItemIndex + 1;
                    let newGroupIndex = groupIndex;

                    // We're at the end of the group, move to the next one
                    if (newItemIndex > group.items.length - 1) {
                        newItemIndex = 0;
                        newGroupIndex = groupIndex + 1;
                        if (newGroupIndex > this.groupedItems.length - 1) {
                            newGroupIndex = 0;
                        }
                    }

                    this.selectedItem = this.groupedItems[newGroupIndex].items[newItemIndex];

                    break;
                }
            }   
        } else {
            // Find which item is next and select it
            // If we're at the end of the list, move to the start
            const selectedIndex = this.filteredItems.indexOf(this.selectedItem)
            let nextIndex = selectedIndex + 1;
    
            if (nextIndex > this.filteredItems.length - 1) { 
                nextIndex = 0; 
            }
    
            this.selectedItem = this.filteredItems[nextIndex];
        }
    }

    private onUpPressed(): void {
        if (this.selectedItem === null) {
            this.selectLastItem();
            return;
        }

        this.scrollSelectedItemToTop = true;

        if (this.groupByProperty) {
            // Find out which group the item is in and then move up one item in the group
            // If we're at the start of the group move to the previous one
            // If we're at the first group, move to the last one
            for (let groupIndex = 0; groupIndex < this.groupedItems.length; groupIndex++) {
                const group = this.groupedItems[groupIndex];
                let selectedItemIndex = -1;
                for (let itemIndex = 0; itemIndex < group.items.length; itemIndex++) {
                    const thisItem = group.items[itemIndex];
                    
                    if (thisItem[this.idProperty] === this.selectedItem[this.idProperty]) {
                        selectedItemIndex = itemIndex;
                        break;
                    }
                }

                if (selectedItemIndex > -1) {
                    let newItemIndex = selectedItemIndex - 1;
                    let newGroupIndex = groupIndex;

                    // If we're at the start of the group, move to the previous one
                    if (newItemIndex < 0) {
                        newGroupIndex = groupIndex - 1;

                        // If we're at the first group, wrap round to the last one
                        if (newGroupIndex < 0) {
                            newGroupIndex = this.groupedItems.length - 1;
                        }

                        // And set the item index to the last item in the group
                        newItemIndex = this.groupedItems[newGroupIndex].items.length - 1;
                    }

                    this.selectedItem = this.groupedItems[newGroupIndex].items[newItemIndex];

                    break;
                }
            }   
        } else {
            // Find which item is next and select it
            // If we're at the end of the list, move to the start
            const selectedIndex = this.filteredItems.indexOf(this.selectedItem)
            let newIndex = selectedIndex - 1;
    
            if (newIndex < 0) { 
                newIndex = this.filteredItems.length - 1; 
            }
    
            this.selectedItem = this.filteredItems[newIndex];
        }
    }

    private onEnterPressed(): void {
        this.inputBox.nativeElement.blur();
    }

    public isItemSelected(item: T): boolean {
        return !!this.selectedItem && item[this.idProperty] === this.selectedItem[this.idProperty];
    }

    public onSearchInputBlur(): void {
        if (!!this.clickedItem) {
            this.selectedItem = this.clickedItem;
            this.clickedItem = null;
        } else if (!this.searchFilter) {
            this.selectedItem = null;
        }
    }

    public onSearchInputValueChanged(newValue: string): void {
        this.searchFilterTerm$.next(newValue);
    }

    public onSearchInputFocus($event: any): void {
        this.clickedItem = null;

        $event.target.select();

        this.searchFilterTerm$.next("");
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
            this.filteredItems = this.items.filter(p =>
                (!this.hideIds || this.hideIds.indexOf(p[this.idProperty]) === -1) &&
                (searchTerm === "" || p[this.itemDisplayProperty].toLowerCase().includes(searchTerm.toLowerCase()))
            ).sort((a, b) => {
                if (a[this.itemDisplayProperty] > b[this.itemDisplayProperty]) {
                    return 1;
                } else if (a[this.itemDisplayProperty] < b[this.itemDisplayProperty]) {
                    return -1;
                } else {
                    return 0;
                }
            });

            if (!!this.groupByProperty) {
                const grouped = groupBy(this.filteredItems, n => get(n, this.groupByProperty))
                const toArray = Object.entries(grouped)
                this.groupedItems = toArray.map(([groupName, items]) => {
                    return {
                        groupName,
                        items: items.filter(p =>
                            (!this.hideIds || this.hideIds.indexOf(p[this.idProperty]) === -1) &&
                            (searchTerm === "" || p[this.itemDisplayProperty].toLowerCase().includes(searchTerm.toLowerCase()))
                        ).sort((a, b) => {
                            if (a[this.itemDisplayProperty] > b[this.itemDisplayProperty]) {
                                return 1;
                            } else if (a[this.itemDisplayProperty] < b[this.itemDisplayProperty]) {
                                return -1;
                            } else {
                                return 0;
                            }
                        })
                    }
                }).sort((a, b) => {
                    if (a.groupName > b.groupName) {
                        return 1;
                    } else if (a.groupName < b.groupName) {
                        return -1;
                    } else {
                        return 0;
                    }
                });

                if (this.groupedItems.length > 0 && this.groupedItems[0].items.length > 0) {
                    //this.selectedItem = this.groupedItems[0].items[0];
                }
            } else {
                if (this.filteredItems.length > 0) {
                    //this.selectedItem = this.filteredItems[0];
                }
            }
        });
    }
}
