import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';
import { productDetailsResolver } from '@core/resolvers/product-details-resolver.service';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsComponent } from './products.component';


let children: Routes;
children = [
  {
    path: '',
    component: ProductsComponent,
    title: 'Products'

  },
  {
    path: 'products-list',
    component: ProductListComponent,
    title: 'Products list'

  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
    resolve: {
      resolve: productDetailsResolver
    },
    title: 'Product details'

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
