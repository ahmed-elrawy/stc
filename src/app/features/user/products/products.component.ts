import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../../admin/components/add-product/add-product.component';
import { ProductsService } from '../../../core/services/products.service';

@Component({
  selector: 'app-products',
  template: `
  <app-product-list></app-product-list>
  `
})

export class ProductsComponent  {
  protected productsServes = inject(ProductsService)
  protected dialog = inject(MatDialog)


}
