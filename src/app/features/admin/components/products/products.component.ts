import { Component, inject,OnDestroy,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '@app/core/models/products';
import { ProductsService } from '@app/core/services/products.service';
import { Subscription } from 'rxjs';
import { AddProductComponent } from '../add-product/add-product.component';


@Component({
  selector: 'app-products-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})


export class ProductsComponent implements OnInit, OnDestroy {
  protected dialog = inject(MatDialog)
	subscription$: Subscription = new Subscription();
	products:Product[] = []

  displayedColumns: string[] = ['id', 'title', 'price', 'desc', 'cat','img', 'rating',"edit", "delete"];
  dataSource: Product[] = []
  constructor(private productsServes: ProductsService) {}

  ngOnInit(): void {
		this.getProducts()
	}

	getProducts():void {
		this.subscription$.add(
			this.productsServes.products().subscribe((res:Product[])=> {
				this.dataSource=res	
			})
		)
	}

  openDialog():void {
    this.dialog.open(AddProductComponent);
  }

  delete(id:number):void {
    if(confirm("Are you sure to delete "+id)) {    
       this.dataSource.splice(id-1,1)
      this.dataSource= [...this.dataSource]
      alert('product has been deleted')
    }
  }

  ngOnDestroy(): void {
		this.subscription$.unsubscribe();
	}
}
