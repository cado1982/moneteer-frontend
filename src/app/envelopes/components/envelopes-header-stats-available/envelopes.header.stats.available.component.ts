import { Component, Input, } from "@angular/core";

@Component({
    selector: "moneteer-envelopes-header-stats-available",
    templateUrl: "./envelopes.header.stats.available.component.html",
    styleUrls: ["./envelopes.header.stats.available.component.scss"]
})
export class EnvelopesHeaderStatsAvailableComponent {
    @Input() available: number;
}
