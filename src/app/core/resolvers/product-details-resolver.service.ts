import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { ProductsService } from '@app/core/services/products.service';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class productDetailsResolver implements Resolve<Product>{
   

  constructor(private Service: ProductsService ,private router: Router) { }

  resolve(route: ActivatedRouteSnapshot,  state: RouterStateSnapshot):  Observable<Product>  {
    let id:any = route.paramMap.get('id')
    return this.Service.productDetails(id ).pipe(
     catchError((err) => {
       return EMPTY
     })
   )
  }
 
 
}
