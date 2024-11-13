import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoaderService } from "src/app/services/loader.service";

@Injectable({
    providedIn:'root'
})
export class HistoryService { 
    constructor(
        private httpClient: HttpClient,
        private loaderService: LoaderService
    ) {}
    public getWsData<T>(tableName: string, pageIndex?: number, pageSize?: number, searchTerm?: string): Observable<T> { 
        let baseUrl = '';
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('admin:password') // Replace with real credentials
        });
    
        if (pageIndex !== undefined && pageSize !== undefined) { 
            headers = headers.set('X-Offset', pageIndex.toString());
            headers = headers.set('X-Limit', pageSize.toString());
        }
    
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            baseUrl = 'http://localhost:8081';
        }
    
        const url = `${baseUrl}/api/products/all`;
        return this.httpClient.get<T>(url, { headers });
    }
    

}