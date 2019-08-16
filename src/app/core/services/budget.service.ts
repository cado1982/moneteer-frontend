
import {map, first} from "rxjs/operators";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiBaseService } from "./api.base.service";
import { AuthService } from "./auth.service";
import { BudgetModel } from "../../core/models/index";

@Injectable()
export class BudgetService extends ApiBaseService {
    constructor(http: HttpClient, authService: AuthService) {
        super(http, authService);
    }

    public getBudget(budgetId: string): Observable<BudgetModel> {
        return this.get<BudgetModel>(`budget/${budgetId}`);
    }

    public getAllBudgets(): Observable<Array<BudgetModel>> {
        return this.get<Array<BudgetModel>>("budget");
    }

    public createBudget(budget: BudgetModel): Observable<BudgetModel> {
        return this.post("budget", budget);
    }

    public deleteBudget(budgetId: string): Observable<string> {
        return this.delete("budget/" + budgetId).pipe(map(() => budgetId));
    }

    public getAvailableIncome(budgetId: string): Observable<number> {
        return this.get<number>(`budget/${budgetId}/availableIncome`)
    }
}
