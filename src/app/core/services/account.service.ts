import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ApiBaseService } from "./api.base.service";
import { AuthService } from "./auth.service";
import { AccountModel } from "../../accounts/models/index";

@Injectable()
export class AccountService extends ApiBaseService {
    constructor(http: HttpClient, authService: AuthService) {
        super(http, authService);
    }

    public getAccounts(budgetId: string): Observable<Array<AccountModel>> {
        return this.get<Array<AccountModel>>(`account?budgetId=${budgetId}`);
    }

    public createAccount(account: AccountModel): Observable<AccountModel> {
        return this.post(`account?budgetId=${account.budgetId}`, account);
    }

    public deleteAccount(account: AccountModel): Observable<void> {
        return this.delete(`account/${account.id}`);
    }

    public updateAccount(account: AccountModel): Observable<AccountModel> {
        return this.put("account", account);
    }
}
