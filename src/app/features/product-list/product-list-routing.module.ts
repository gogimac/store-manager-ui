import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list/product-list.component";
import { Router, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path:'',
    component: ProductListComponent,
    data: { title: 'Product List'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductListRoutingModule  {}