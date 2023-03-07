import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ProductsComponent } from '../../../user/products/products.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
})
export class AddProductComponent extends ProductsComponent implements OnInit {
  addProductForm!:FormGroup
  constructor(private _fb: FormBuilder) {
     super()
    }


  ngOnInit(): void {
    this.initiateAddProductForm()
  }


  initiateAddProductForm():void {
    this.addProductForm = this._fb.group({
      title: ['1',Validators.required],
      price: ['',Validators.required],
      img: ['',Validators.required],
      description: ['',Validators.required],
      category: ['',Validators.required]
    })
  };

  submit() {
    this.productsServes.addProduct(this.addProductForm.value).subscribe(res => {
    })
  }

}
