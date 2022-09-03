import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Product} from "../product.model";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[];
  productsSubscription: Subscription;
  filteredValue: string = '';
  filterValueSubscription: Subscription;
  filteredProducts: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productsSubscription =this.productService.updatedProducts
      .subscribe((products: Product[])=>{
        this.products = products
        this.applyFilter()
      })
    this.productService.getProducts().then((response: Product[])=> {
        this.products = response
        this.filteredProducts = this.products;
        this.productService.loading.next(false);
    })
    this.filterValueSubscription = this.productService.filteredValue
      .subscribe((filteredValue: string)=> {
        this.filteredValue = filteredValue
        this.applyFilter()
      })
  }
  applyFilter(){
      this.filteredProducts = this.products.filter(
        (product: Product) => product.name.toLowerCase().includes(this.filteredValue.toLowerCase()) ||
          product.description.toLowerCase().includes(this.filteredValue.toLowerCase())
      )

  }
  ngOnDestroy():void{
    this.productsSubscription?.unsubscribe()
  }

}
