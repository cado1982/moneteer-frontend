import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { PayeeModel } from "./../../core/models";
import { ApiBaseService } from "./api.base.service";
import { AuthService } from "./auth.service";
import { Store } from "@ngrx/store";
import { IUIState } from "../reducers/ui.state.reducer";

@Injectable()
export class PayeeService extends ApiBaseService {
    constructor(public http: HttpClient, public store: Store<IUIState>) {
        super(http, store);
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
