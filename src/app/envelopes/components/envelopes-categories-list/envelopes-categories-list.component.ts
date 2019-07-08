import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EnvelopesDataService } from '../../services/envelopes-data.service';

@Component({
    selector: 'moneteer-envelopes-categories-list',
    templateUrl: './envelopes-categories-list.component.html',
    styleUrls: ['./envelopes-categories-list.component.scss']
})
export class EnvelopesCategoriesListComponent implements OnInit {
    @Output() public assignedChanged: EventEmitter<{ oldValue: number, newValue: number }>
        = new EventEmitter<{ oldValue: number, newValue: number }>();

    constructor(public dataService: EnvelopesDataService) {

    }

    ngOnInit(): void {
     
    }

    public onMasterCategoryAssignedChanged(changes: { oldValue: number, newValue: number }): void {
        this.assignedChanged.emit(changes);
    }

}
