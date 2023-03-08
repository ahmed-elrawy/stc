import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '@app/shared/components/admin-layout/admin-layout.component';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsComponent } from './components/products/products.component';

let children: Routes;
children = [
  {
    path: '',
    component: ProductsComponent,
    title: 'Products'
  },
  {
    path: 'add-product',
    component: AddProductComponent,
    title: 'Add product'
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
