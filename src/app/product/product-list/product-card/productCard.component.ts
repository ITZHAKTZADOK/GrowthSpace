import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../product.model";
import {ProductService} from "../../product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-card',
  templateUrl: './productCard.component.html',
  styleUrls: ['./productCard.component.css']
})
export class ProductCardComponent implements OnInit, OnDestroy {
  @Input() product: Product;
  selectedProduct: Product;
  selectedProductSubscription: Subscription
  isEditMode: boolean = false;
  editModeSubscription: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.selectedProductSubscription = this.productService.selectedProduct
      .subscribe((selectedProduct: Product)=>{
        this.selectedProduct = selectedProduct
      })
    this.editModeSubscription = this.productService.editMode
      .subscribe((editMode: boolean)=> {
        this.isEditMode = editMode;
      })


  }

  onProductSelect(){
    this.productService.selectedProduct.next(this.product)
    this.productService.editMode.next(true)
  }
  onProductDelete(){
    this.productService.deleteProduct(this.product.id)
  }
  ngOnDestroy() {
    this.selectedProductSubscription.unsubscribe()
  }
}
