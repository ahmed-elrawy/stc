import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '@core/data/products';
import {environment as env} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}
 
  products(): Observable<Product[]> {
    return this.http.get<Product[]>(`${env.ApiUrl}products?limit=10)`)
  }
  productDetails(id:number): Observable<any> {
    return this.http.get<any>(`${env.ApiUrl}products/${id}`)
  }
  addProduct(body:Product): Observable<Product> {
    return this.http.post<Product>(`${env.ApiUrl}products`,body)
  }
}