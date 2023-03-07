import {NgModule} from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './components/product-list/product-list.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductDetailsComponent,
  ],
  imports: [
    ProductRoutingModule,
    SharedModule,
    ]
})
export class ProductModule {
}
