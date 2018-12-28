import { Component, OnInit } from "@angular/core";
import { EnvelopeModel } from "../../../core/models";
import { getEnvelopes, IEnvelopesState, getAvailable } from "../../../core/reducers/envelopes.reducer";
import { Store, select } from "@ngrx/store";

@Component({
    selector: "moneteer-envelopes-home",
    templateUrl: "./envelopes.home.component.html",
    styleUrls: ["./envelopes.home.component.scss"]
})
export class EnvelopesHomeComponent implements OnInit {
    public envelopes: EnvelopeModel[];
    public available: number;
    
    constructor(private store: Store<IEnvelopesState>) {
        
    }

    public ngOnInit(): void {
        this.store.select(getEnvelopes).subscribe(e => this.envelopes = e);
        this.store.select(getAvailable).subscribe(a => this.available = a);
    }
}
