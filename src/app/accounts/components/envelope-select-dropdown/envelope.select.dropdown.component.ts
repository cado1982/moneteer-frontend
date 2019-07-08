import { Component, OnInit, Input, EventEmitter, Output, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { EnvelopeModel } from '../../../core/models';
import { DropdownComponent } from '../../../shared/components';
import { Subject, Observable, BehaviorSubject, combineLatest, fromEvent } from 'rxjs';
import { map, filter, tap, mergeMap, concatMap } from 'rxjs/operators';
import { groupBy, Dictionary } from 'lodash';
import { EnvelopesDataService } from 'src/app/envelopes/services/envelopes-data.service';

@Component({
    selector: 'moneteer-envelope-select-dropdown',
    templateUrl: './envelope.select.dropdown.component.html',
    styleUrls: ['./envelope.select.dropdown.component.scss']
})
export class EnvelopeSelectDropdownComponent implements OnInit {
    constructor(public dataService: EnvelopesDataService) {

    }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}
