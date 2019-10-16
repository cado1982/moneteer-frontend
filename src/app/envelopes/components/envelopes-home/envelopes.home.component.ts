import { Component, OnInit } from "@angular/core";
import { EnvelopesDataService } from "../../services/envelopes-data.service";

@Component({
    selector: "moneteer-envelopes-home",
    templateUrl: "./envelopes.home.component.html",
    styleUrls: ["./envelopes.home.component.scss"],
    providers: [EnvelopesDataService]
})
export class EnvelopesHomeComponent implements OnInit {
    public ngOnInit(): void {
    }
}
