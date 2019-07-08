import { Component, Input, } from "@angular/core";
import { EnvelopesDataService } from "../../services/envelopes-data.service";

@Component({
    selector: "moneteer-envelopes-header-stats-available",
    templateUrl: "./envelopes.header.stats.available.component.html",
    styleUrls: ["./envelopes.header.stats.available.component.scss"]
})
export class EnvelopesHeaderStatsAvailableComponent {

    constructor(public dataService: EnvelopesDataService) {
        
    }
}
