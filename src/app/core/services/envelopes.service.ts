
import {first} from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EnvelopeModel, EnvelopeCategoryModel } from "../../core/models/index";
import { ApiBaseService } from "./api.base.service";
import { AuthService } from "./auth.service";

@Injectable()
export class EnvelopesService extends ApiBaseService {
    constructor(http: HttpClient, authService: AuthService) {
        super(http, authService);
    }

    public getEnvelopesForBudget(budgetId: string): Observable<{envelopes: EnvelopeModel[], available: number}> {
        return this.get<{envelopes: EnvelopeModel[], available: number}>(`budget/${budgetId}/envelopes`);
    }

    public createEnvelope(budgetId: string, envelope: EnvelopeModel) {
        return this.post(`budget/${budgetId}/envelopes`, envelope);
    }

    public createEnvelopeCategory(budgetId: string, envelopeCategory: EnvelopeCategoryModel) {
        return this.post(`budget/${budgetId}/envelopes/category`, envelopeCategory);
    }
}
