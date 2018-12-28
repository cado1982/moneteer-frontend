import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { PayeeModel } from "./../../core/models";
import { ApiBaseService } from "./api.base.service";
import { AuthService } from "./auth.service";

@Injectable()
export class PayeeService extends ApiBaseService {

    constructor(http: HttpClient, authService: AuthService) {
        super(http, authService);
    }

    public deletePayee(payeeId: string): Observable<void> {
        return this.delete(`payee/${payeeId}`);
    }

    public updatePayee(payee: PayeeModel): Observable<PayeeModel> {
        return this.put(`payee`, payee);
    }

    public getAllPayeesByBudget(budgetId: string): Observable<Array<PayeeModel>> {
        return this.get<Array<PayeeModel>>(`budget/${budgetId}/payees`);
    }
}
