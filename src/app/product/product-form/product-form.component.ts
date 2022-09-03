import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../product.model";
import {ProductService} from "../product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy {
  editMode: boolean = false;
  productForm: FormGroup;
  selectedProduct: Product;
  selectedProductSubscription: Subscription;
  editModeSubscription: Subscription
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.selectedProductSubscription = this.productService.selectedProduct.subscribe((selectedProduct)=>{
      this.selectedProduct = selectedProduct;
    })
    this.editModeSubscription = this.productService.editMode.subscribe((editMode: boolean)=>{
      this.editMode = editMode
      this.initForm()
    })
    this.initForm()

  }

  private initForm(){
    this.productForm = new FormGroup({
      'name': new FormControl(this.editMode ? this.selectedProduct.name : ''),
      'description': new FormControl(this.editMode ? this.selectedProduct.description : ''),
      'price': new FormControl(this.editMode ? this.selectedProduct.price : '')
    })
    this.productForm.markAsPristine();
    this.productForm.markAsUntouched();
  }
  onSubmit(){
    if(this.editMode){
      this.productService.updateProduct(this.productForm.value, this.selectedProduct.id)
    }else{
      this.productService.addProduct(this.productForm.value)
    }
  }

  ngOnDestroy(): void {
    this.selectedProductSubscription.unsubscribe()
    this.editModeSubscription.unsubscribe()
  }
}
