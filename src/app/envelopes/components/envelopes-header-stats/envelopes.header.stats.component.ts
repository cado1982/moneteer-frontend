import { Component, Input, } from "@angular/core";

@Component({
    selector: "moneteer-envelopes-header-stats",
    templateUrl: "./envelopes.header.stats.component.html",
    styleUrls: ["./envelopes.header.stats.component.scss"]
})
export class EnvelopesHeaderStatsComponent {
    @Input() public available: number;
}
