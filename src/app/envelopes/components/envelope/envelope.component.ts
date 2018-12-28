import { Component, Input, OnChanges, SimpleChanges, NgZone,
         ChangeDetectorRef, Output, EventEmitter, OnInit, } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { NotificationsService } from "../../../core/services/index";
import { Store } from "@ngrx/store";
import { IEnvelopesState } from "../../../core/reducers/envelopes.reducer";
import { EnvelopesActionTypes } from "../../../core/actions/envelopes.actions";
import { Actions, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import { EnvelopeModel } from "../../../core/models";


@Component({
    selector: "moneteer-envelope",
    templateUrl: "./envelope.component.html",
    styleUrls: ["./envelope.component.scss"]
})
export class EnvelopeComponent implements OnChanges, OnInit {
    @Input() public envelope: EnvelopeModel;

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