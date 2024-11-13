import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { ProductService } from 'src/app/services/prduct.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

// Mock product data
const mockProducts = [
  { id: 1, name: 'Product 1', description: 'Description for product 1', price: 19.99, image: 'path-to-image-1.jpg' },
  { id: 2, name: 'Product 2', description: 'Description for product 2', price: 29.99, image: 'path-to-image-2.jpg' }
];

// Mock ProductService
class MockProductService {
  getProducts() {
    return of(mockProducts);
  }
}

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      providers: [{ provide: ProductService, useClass: MockProductService }]
    });
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProducts and set products on initialization', () => {
    spyOn(productService, 'getProducts').and.callThrough();
    component.ngOnInit();
    expect(productService.getProducts).toHaveBeenCalled();
    expect(component.products.length).toBe(2);
  });

  it('should render product list', () => {
    fixture.detectChanges();
    const productItems: DebugElement[] = fixture.debugElement.queryAll(By.css('.product-item'));
    expect(productItems.length).toBe(2);
  });

  it('should display product name, description, price, and image for each product', () => {
    fixture.detectChanges();
    const productItems = fixture.debugElement.queryAll(By.css('.product-item'));

    productItems.forEach((item, index) => {
      const productName = item.query(By.css('.product-name')).nativeElement;
      const productDescription = item.query(By.css('.product-description')).nativeElement;
      const productPrice = item.query(By.css('.product-price')).nativeElement;
      const productImage = item.query(By.css('.product-image')).nativeElement as HTMLImageElement;

      expect(productName.textContent).toContain(mockProducts[index].name);
      expect(productDescription.textContent).toContain(mockProducts[index].description);
      expect(productPrice.textContent).toContain(`$${mockProducts[index].price.toFixed(2)}`);
      expect(productImage.src).toContain(mockProducts[index].image);
    });
  });
});
