import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Resolve } from '@angular/router';
import { Product } from '@app/core/models/products';
import { map } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit, OnDestroy{
  subscription$: Subscription = new Subscription();
  product?: Product

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct():void {
    this.subscription$.add(
      this._route.data.pipe(  
        map((data:any) => {
        return data['resolve']   
        })
        ).subscribe((res:Product) =>{
        this.product = res  
      })
    )
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
