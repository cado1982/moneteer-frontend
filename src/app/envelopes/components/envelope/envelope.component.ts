import { Component, Input, OnChanges, SimpleChanges, NgZone,
         ChangeDetectorRef, Output, EventEmitter, OnInit, HostBinding, HostListener, } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { NotificationsService } from "../../../core/services/index";
import { Store } from "@ngrx/store";
import { IEnvelopesState } from "../../../core/reducers/envelopes.reducer";
import { EnvelopesActionTypes } from "../../../core/actions/envelopes.actions";
import { Actions, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import { EnvelopeModel } from "../../../core/models";
import { EnvelopesSelectionService } from "../../services/envelopes-selection.service";


@Component({
    selector: "moneteer-envelope",
    templateUrl: "./envelope.component.html",
    styleUrls: ["./envelope.component.scss"]
})
export class EnvelopeComponent implements OnChanges, OnInit {
    @Input() public envelope: EnvelopeModel;
    
    @Output() public assignedChanged: EventEmitter<{oldValue: number, newValue: number}> =
        new EventEmitter<{oldValue: number, newValue: number}>();

    @HostBinding('class.selected') get isSelected() {
        return this.selectionService.selectedEnvelope && this.selectionService.selectedEnvelope.id === this.envelope.id;
    }

    public assignedValue: number;

    constructor(private activatedRoute: ActivatedRoute,
                private notificationsService: NotificationsService,
                private ngZone: NgZone,
                private store: Store<IEnvelopesState>,
                private actions$: Actions,
                private changeDetector: ChangeDetectorRef,
                public selectionService: EnvelopesSelectionService) {

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

    @HostListener('click') click() {
        this.selectionService.selectedEnvelope = this.envelope;
    }

    public showTransactions(): void {
        //console.log(this.monthCategory.activityTransactions);
    }
}