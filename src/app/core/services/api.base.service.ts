import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "./../../../environments/environment";
import { AuthService } from "./../services/auth.service";

export class ApiBaseService {
    private baseApiUrl: string = environment.api_url;

    constructor(private http: HttpClient, private authService: AuthService) {
        
    }

    protected get<T>(url: string): Observable<T> {
        return this.http.get<T>(this.baseApiUrl + url);
    }

    protected put<TPayload, TResponse>(url: string, payload: TPayload): Observable<TResponse> {
        return this.http.put<TResponse>(this.baseApiUrl + url, payload, { headers: { 'Content-Type': "application/json" } });
    }

    protected putWithHeaders<TPayload, TResponse>(url: string, payload: TPayload, headers: HttpHeaders): Observable<TResponse> {
        return this.http.put<TResponse>(this.baseApiUrl + url, payload, { headers: headers });
    }

    protected post<TPayload, TResponse>(url: string, payload: TPayload): Observable<TResponse> {
        return this.http.post<TResponse>(this.baseApiUrl + url, payload);
    }

    protected delete(url: string): Observable<any> {
        return this.http.delete(this.baseApiUrl + url);
    }

    protected deleteWithBody(url: string, value: any): Observable<any> {
        return this.http.request("delete", this.baseApiUrl + url, { body: value });
    }
}
