import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
        map((data) => {
        return data
        })
        ).subscribe(res =>{
        this.product = res['resolve']     
      })
    )
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
