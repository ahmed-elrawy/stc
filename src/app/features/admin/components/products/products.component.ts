import { Component, inject,ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '@app/core/models/products';
import { AddProductComponent } from '../add-product/add-product.component';





const ELEMENT_DATA: Product[] = [
  {id: 1, title: "title", price: 1, description: "desc", category: "cat", image: "", rating: {rate:1, count: 1 }},
  {id: 2, title: "title", price: 1, description: "desc", category: "cat", image: "", rating: {rate:1, count: 1 }},
  {id: 3, title: "title", price: 1, description: "desc", category: "cat", image: "", rating: {rate:1, count: 1 }},
  {id: 4, title: "title", price: 1, description: "desc", category: "cat", image: "", rating: {rate:1, count: 1 }},
  {id: 5, title: "title", price: 1, description: "desc", category: "cat", image: "", rating: {rate:1, count: 1 }},
  {id: 6, title: "title", price: 1, description: "desc", category: "cat", image: "", rating: {rate:1, count: 1 }},
  {id: 7, title: "title", price: 1, description: "desc", category: "cat", image: "", rating: {rate:1, count: 1 }},
  {id: 8, title: "title", price: 1, description: "desc", category: "cat", image: "", rating: {rate:1, count: 1 }},
  {id: 9, title: "title", price: 1, description: "desc", category: "cat", image: "", rating: {rate:1, count: 1 }},
  {id: 10,title: "title", price: 1, description: "desc", category: "cat", image: "", rating: {rate:1, count: 1 }},
];

@Component({
  selector: 'app-products-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})


export class ProductsComponent {
  protected dialog = inject(MatDialog)
  
  displayedColumns: string[] = ['id', 'title', 'price', 'desc', 'cat','img', 'rating',"edit", "delete"];
  dataSource = ELEMENT_DATA;

  openDialog() {
    this.dialog.open(AddProductComponent);
  }

  delete(id:number) {
    if(confirm("Are you sure to delete "+id)) {
      console.log(id-1);
      
      this.dataSource= this.dataSource.slice(id-1)
      console.log(this.dataSource);
      
      alert('product has been deleted')
    }
  }

}
