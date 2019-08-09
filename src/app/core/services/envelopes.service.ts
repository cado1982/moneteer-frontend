
import {first, map} from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EnvelopeModel, EnvelopeCategoryModel } from "../../core/models/index";
import { ApiBaseService } from "./api.base.service";
import { AuthService } from "./auth.service";
import { AssignIncomeRequest } from "../models/assign.income.request";

@Injectable()
export class EnvelopesService extends ApiBaseService {
    constructor(http: HttpClient, authService: AuthService) {
        super(http, authService);
    }

    public getEnvelopesForBudget(budgetId: string): Observable<{envelopes: EnvelopeModel[], available: number}> {
        return this.get<{envelopes: EnvelopeModel[], available: number}>(`budget/${budgetId}/envelopes`);
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

    public assignIncome(budgetId: string, request: AssignIncomeRequest): Observable<void> {
        return this.post(`budget/${budgetId}/envelopes/assignIncome`, request);
    }

    public deleteEnvelope(envelopeId: string): Observable<string> {
        return this.delete(`envelopes/${envelopeId}`).pipe(
            map(() => envelopeId)
        );
    }
}
