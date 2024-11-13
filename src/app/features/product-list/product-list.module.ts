import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list/product-list.component";
import { CommonModule } from "@angular/common";
import { ProductListRoutingModule } from "./product-list-routing.module";
import { CoreModule } from "src/app/core/core.module";

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    CoreModule
  ]
})
export class ProductListModule { }