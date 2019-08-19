
import { map} from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EnvelopeModel, EnvelopeCategoryModel } from "../../core/models/index";
import { ApiBaseService } from "./api.base.service";
import { AuthService } from "./auth.service";
import { MoveBalanceRequest } from "../models/move.balance.request";

@Injectable()
export class EnvelopesService extends ApiBaseService {
    constructor(http: HttpClient, authService: AuthService) {
        super(http, authService);
    }

    public getEnvelopesForBudget(budgetId: string): Observable<EnvelopeModel[]> {
        return this.get<EnvelopeModel[]>(`budget/${budgetId}/envelopes`);
    }

    public getEnvelopeCategoriesForBudget(budgetId: string): Observable<EnvelopeCategoryModel[]> {
        return this.get<EnvelopeCategoryModel[]>(`budget/${budgetId}/envelopes/categories`);
    }

    public createEnvelope(budgetId: string, envelope: EnvelopeModel): Observable<EnvelopeModel> {
        return this.post(`budget/${budgetId}/envelopes`, envelope);
    }

    public createEnvelopeCategory(budgetId: string, envelopeCategory: EnvelopeCategoryModel): Observable<EnvelopeCategoryModel> {
        return this.post(`budget/${budgetId}/envelopes/category`, envelopeCategory);
    }

    public moveBalance(fromEnvelopeId: string, request: MoveBalanceRequest): Observable<void> {
        return this.post(`envelopes/${fromEnvelopeId}/movebalance`, request);
    }

    public deleteEnvelope(envelopeId: string): Observable<string> {
        return this.delete(`envelopes/${envelopeId}`).pipe(
            map(() => envelopeId)
        );
    }
}
