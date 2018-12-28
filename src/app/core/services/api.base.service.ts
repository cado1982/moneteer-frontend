import { HttpClient } from "@angular/common/http";
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

    protected put<T>(url: string, value: T): Observable<T> {
        return this.http.put<T>(this.baseApiUrl + url, value);
    }

    protected post<T>(url: string, value: T): Observable<T> {
        return this.http.post<T>(this.baseApiUrl + url, value);
    }

    protected delete(url: string): Observable<any> {
        return this.http.delete(this.baseApiUrl + url);
    }

    protected deleteWithBody(url: string, value: any): Observable<any> {
        return this.http.request("delete", this.baseApiUrl + url, { body: value });
    }
}
