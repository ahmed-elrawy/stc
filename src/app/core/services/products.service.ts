import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Product } from '@app/core/models/products';
import {environment as env} from '../../../environments/environment';
import { PRODUCTS_DATA } from 'assets/fake-api';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}
 
  products(): Observable<Product[]> {
    // return this.http.get<Product[]>(`${env.ApiUrl}products?limit=10`)
    return of(PRODUCTS_DATA)
  }
  productDetails(id:number): Observable<any> {
    return of(PRODUCTS_DATA[id])

    // return this.http.get<any>(`${env.ApiUrl}products/${id}`)
  }
  addProduct(body:Product): Observable<Product> {
    return this.http.post<Product>(`${env.ApiUrl}products`,body)
  }
}