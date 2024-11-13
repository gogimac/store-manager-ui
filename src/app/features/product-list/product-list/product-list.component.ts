import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MockHistoryService } from './../../../services/mock-product.service'; // Update the path if needed
import { Product } from 'src/app/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public filterValue: string = '';
  public pageIndex = 0;
  public pageSize = 10;
  public total = 0;
  public pageSizeOptions = [10, 24, 50];
  public $history: Observable<Product[]> | undefined;

  constructor(private mockHistoryService: MockHistoryService) {}

  ngOnInit(): void {
    this.fetchProducts(); // Initial data load
  }

  public displayedColumns: string[] = ['name', 'price'];

  public handleFilterChange(event?: PageEvent): void {
    if (event) {
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
    }
    this.fetchProducts();
  }

  onChange(event?: PageEvent): void { 
    this.fetchProducts();
  }

  tabChanged(event: MatTabChangeEvent): void {
    this.handleFilterChange(); // Reload data if necessary
  }

  private fetchProducts(): void {
    this.$history = this.mockHistoryService.getWsData<Product>("product", this.pageIndex, this.pageSize).pipe(
      tap(data => {
        console.log('Retrieved data:', data); // Log the data
        this.total = data.length;
      })
    );
  }
}
