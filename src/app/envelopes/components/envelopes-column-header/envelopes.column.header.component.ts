import { Component, ElementRef, ViewChild, AfterViewInit, } from "@angular/core";
import { EnvelopesDataService } from "../../services/envelopes-data.service";
import { fromEvent } from "rxjs";
import { map, startWith, debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
    selector: "moneteer-envelopes-column-header",
    templateUrl: "./envelopes.column.header.component.html",
    styleUrls: ["./envelopes.column.header.component.scss"]
})
export class EnvelopesColumnHeaderComponent implements AfterViewInit {
    @ViewChild('searchInput', {static: true}) private searchInput: ElementRef;
    
    constructor(public dataService: EnvelopesDataService) {
        
    }

    ngAfterViewInit(): void {
        const searchInputValues$ = fromEvent<any>(this.searchInput.nativeElement, 'keyup').pipe(
            map(event => event.target.value),
            startWith(''),
            debounceTime(200),
            distinctUntilChanged()
        )

        searchInputValues$.subscribe(filter => {
            this.dataService.filterEnvelopes(filter);
        });
    }
}
