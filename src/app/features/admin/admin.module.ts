import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [ProductsComponent, AddProductComponent],
  imports: [AdminRoutingModule, SharedModule],
})
export class AdminModule {}
