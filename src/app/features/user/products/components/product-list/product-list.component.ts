import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Product } from '@app/core/models/products';
import { ProductsComponent } from '../../products.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent extends ProductsComponent implements OnInit, OnDestroy {
	subscription$: Subscription = new Subscription();
	products:Product[] = []
	constructor( ) {
		super()
	}
	ngOnInit(): void {
		this.getProducts()
	}

	getProducts():void {
		this.subscription$.add(
			this.productsServes.products().subscribe((res: Product[]) => {
				this.products=res	
			})
		)
	}

	ngOnDestroy(): void {
		this.subscription$.unsubscribe();
	}
}