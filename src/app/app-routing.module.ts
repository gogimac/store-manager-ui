// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanLoadService } from './services/can-load-service';

const routes: Routes = [
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
  { 
    path: 'product-list', 
    loadChildren: () => import('./features/product-list/product-list.module').then(m => m.ProductListModule),
    canLoad:[ CanLoadService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
        useHash: true,
        scrollPositionRestoration: 'enabled',
        preloadingStrategy: PreloadAllModules
    })],
    providers: [CanLoadService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
