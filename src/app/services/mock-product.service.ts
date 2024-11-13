import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MockHistoryService {

    constructor() {}

    public getWsData<T>(tableName: string, pageIndex?: number, pageSize?: number, searchTerm?: string): Observable<T[]> {
        // Mock data based on your table structure
        const mockData: any[] = [
            { description: "Demo product 1", name: "Biscuiti", price: 19.99, createdAt: null },
            { description: "Demo product 2", name: "Covrigi", price: 19.99, createdAt: null },
            { description: "Sample product", name: "Sample Product", price: 21.01, createdAt: null },
            { description: "Demo product 3", name: "Cartofy", price: 10.99, createdAt: null },
            { description: "Demo product 4", name: "Ulei", price: 20.99, createdAt: "2024-11-13" }
        ];

        // Filtering, pagination, etc.
        const startIndex = (pageIndex || 0) * (pageSize || mockData.length);
        const paginatedData = mockData.slice(startIndex, startIndex + (pageSize || mockData.length));

        return of(paginatedData); // Ensure this returns Observable<T[]>
    }
}
