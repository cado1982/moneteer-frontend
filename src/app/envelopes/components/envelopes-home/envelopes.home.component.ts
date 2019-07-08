import { Component, OnInit } from "@angular/core";
import { EnvelopeModel } from "../../../core/models";
import { getEnvelopes, IEnvelopesState, getAvailable } from "../../../core/reducers/envelopes.reducer";
import { Store } from "@ngrx/store";
import { EnvelopesSelectionService } from "../../services/envelopes-selection.service";
import { EnvelopesDataService } from "../../services/envelopes-data.service";

@Component({
    selector: "moneteer-envelopes-home",
    templateUrl: "./envelopes.home.component.html",
    styleUrls: ["./envelopes.home.component.scss"],
    providers: [EnvelopesSelectionService, EnvelopesDataService]
})
export class EnvelopesHomeComponent implements OnInit {
    public ngOnInit(): void {
    }
}
