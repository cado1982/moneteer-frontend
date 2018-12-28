import { Component, Input, OnChanges, SimpleChanges, NgZone,
         ChangeDetectorRef, Output, EventEmitter, OnInit, } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { NotificationsService } from "../../../core/services/index";
import { Store } from "@ngrx/store";
import { IEnvelopesState } from "../../../core/reducers/envelopes.reducer";
import { EnvelopesActionTypes } from "../../../core/actions/envelopes.actions";
import { Actions, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";


@Component({
    selector: "moneteer-envelopes-month-category"
    //templateUrl: "./envelopes.month.category.component.html",
    //styleUrls: ["./envelopes.month.category.component.scss"]
})
export class EnvelopesMonthCategoryComponent implements OnChanges, OnInit {

    
    //@Input() public monthCategory: ChildCategoryMonthModel;

    @Output() public assignedChanged: EventEmitter<{oldValue: number, newValue: number}> =
        new EventEmitter<{oldValue: number, newValue: number}>();

    public assignedValue: number;

    constructor(private activatedRoute: ActivatedRoute,
                private notificationsService: NotificationsService,
                private ngZone: NgZone,
                private store: Store<IEnvelopesState>,
                private actions$: Actions,
                private changeDetector: ChangeDetectorRef) {

    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.monthCategory) {
            this.assignedValue = changes.monthCategory.currentValue.assigned;
        }
        if (changes.assignedValue) {
            console.log(changes);
        }
    }

    ngOnInit(): void {
    }

    public showTransactions(): void {
        //console.log(this.monthCategory.activityTransactions);
    }
}