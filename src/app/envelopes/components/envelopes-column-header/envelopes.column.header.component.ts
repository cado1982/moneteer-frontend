import { Component, ElementRef, ViewChild, AfterViewInit, } from "@angular/core";
import { EnvelopesDataService } from "../../services/envelopes-data.service";
import { fromEvent } from "rxjs";
import { map, startWith, debounceTime, distinctUntilChanged } from "rxjs/operators";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EnvelopeAddCategoryModalComponent } from "../envelope-add-category-modal/envelope-add-category-modal.component";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "moneteer-envelopes-column-header",
    templateUrl: "./envelopes.column.header.component.html",
    styleUrls: ["./envelopes.column.header.component.scss"]
})
export class EnvelopesColumnHeaderComponent implements AfterViewInit {
    @ViewChild('searchInput', {static: true}) private searchInput: ElementRef;
    
    constructor(
        public dataService: EnvelopesDataService, 
        private modalService: NgbModal,
        private activatedRoute: ActivatedRoute
    ) {
        
    }

    ngAfterViewInit(): void {
        const searchInputValues$ = fromEvent<any>(this.searchInput.nativeElement, 'keyup').pipe(
            map(event => event.target.value),
            startWith(''),
            debounceTime(100),
            distinctUntilChanged()
        )

        searchInputValues$.subscribe(filter => {
            this.dataService.filterEnvelopes(filter);
        });
    }

    public addEnvelopeCategory(): void {
        const budgetId = this.activatedRoute.snapshot.params.budgetId;
        if (!budgetId) {
            throw new Error("Budget id is missing");
        }

        let modalRef = this.modalService.open(EnvelopeAddCategoryModalComponent);
        modalRef.componentInstance.budgetId = budgetId;
    }
}
