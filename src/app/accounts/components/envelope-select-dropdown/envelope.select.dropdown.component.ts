import { Component, OnInit, Input, EventEmitter, Output, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { EnvelopeModel } from '../../../core/models';
import { DropdownComponent } from '../../../shared/components';
import { Subject, Observable, BehaviorSubject, combineLatest, fromEvent } from 'rxjs';
import { map, filter, tap, mergeMap, concatMap } from 'rxjs/operators';
import { groupBy, Dictionary } from 'lodash';

@Component({
    selector: 'moneteer-envelope-select-dropdown',
    templateUrl: './envelope.select.dropdown.component.html',
    styleUrls: ['./envelope.select.dropdown.component.scss']
})
export class EnvelopeSelectDropdownComponent implements OnInit {
    @Input() public disabled: Boolean;
    @Input() envelopes: EnvelopeModel[];
    @Input() selectedEnvelope: EnvelopeModel;
    @Output() selectedEnvelopeChange = new EventEmitter<EnvelopeModel>();
    
    ngOnInit(): void {
        

        // this.searchFilterTerm$.subscribe(searchTerm => {
        //     const filteredEnvelopes = this.envelopes.filter(p => searchTerm === "" || p.name.toLowerCase().startsWith(searchTerm.toLowerCase()))

        //     this.highlightedEnvelope = filteredEnvelopes.length === 0 ? null : filteredEnvelopes[0]

        //     const grouped = groupBy(filteredEnvelopes, n => n.envelopeCategory.name)
        //     const toArray = Object.entries(grouped)
        //     const groups = toArray.map(value => {
        //         const groupName = value[0];
        //         const envelopes = value[1];

        //         return {
        //             groupName,
        //             envelopes
        //         }
        //     })

        //     this.filteredEnvelopes = groups;
        // })

    }

    public createEnvelope(): void {
        console.log("create envelope");
    }


}
