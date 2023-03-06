import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  template: `
  <div class="fixed-bottom m-5"  style="position:fixed;  width: 94%;" >
    <button   style="float:right" (click)="openDialog()" mat-fab color="primary">
      <mat-icon>add</mat-icon>
    </button>
  </div>
  <app-product-list></app-product-list>
  `
})

export class ProductsComponent  {
  protected productsServes = inject(ProductsService)
  protected dialog = inject(MatDialog)

  openDialog() {
    this.dialog.open(AddProductComponent);
  }
}
