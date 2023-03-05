import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { productDetailsResolver } from '@core/resolvers/product-details-resolver.service';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products.component';


let children: Routes;
children = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },

  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products-list',
    component: ProductListComponent,
  },

  {
    path: 'add-product',
    component: AddProductComponent,
  },

  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    resolve: {
      resolve: productDetailsResolver
    },
  },

  {
    path: '**',
    component: NotFoundComponent,
  }
];
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
