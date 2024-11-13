// src/app/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MockHistoryService } from './mock-product.service';
import { Product } from '../core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8081/api/products/all';
  private username = 'admin';
  private password = 'password';

  constructor(
    private http: HttpClient, 
  ) {}

  getProducts(): Observable<Product[]> {
    // Create headers with Basic Auth and Content-Type
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(`${this.username}:${this.password}`),
      'Content-Type': 'application/json'
    });

    // Make the GET request with headers
    return this.http.get<Product[]>(this.apiUrl, { headers });
  }
}
