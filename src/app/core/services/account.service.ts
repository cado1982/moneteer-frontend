import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ApiBaseService } from "./api.base.service";
import { AccountModel } from "../../accounts/models/index";
import { Store } from "@ngrx/store";
import { IUIState } from "../reducers/ui.state.reducer";

@Injectable()
export class AccountService extends ApiBaseService {
    constructor(public http: HttpClient, public store: Store<IUIState>) {
        super(http, store);
    }

    public getAccounts(budgetId: string): Observable<Array<AccountModel>> {
        return this.get<Array<AccountModel>>(`budget/${budgetId}/accounts`);
    }

    public getAccount(accountId: string): Observable<AccountModel> {
        return this.get<AccountModel>(`account/${accountId}`);
    }

    public createAccount(account: AccountModel): Observable<AccountModel> {
        return this.post(`account`, account);
    }

    public deleteAccount(account: AccountModel): Observable<void> {
        return this.delete(`account/${account.id}`);
    }

    public updateAccount(account: AccountModel): Observable<AccountModel> {
        return this.put("account", account);
    }
}
