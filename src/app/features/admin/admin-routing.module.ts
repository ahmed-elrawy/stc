import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '@app/shared/components/admin-layout/admin-layout.component';
import { NotFoundComponent } from '@app/shared/components/not-found/not-found.component';
import { ProductsComponent } from './products/products.component';

let children: Routes;
children = [
  {
    path: '',
    redirectTo: 'products-list',
    pathMatch: 'full',
  },

  {
    path: 'products-list',
    component: ProductsComponent,
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
