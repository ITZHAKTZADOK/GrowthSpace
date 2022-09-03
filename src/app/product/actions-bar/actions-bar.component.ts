import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-actions-bar',
  templateUrl: './actions-bar.component.html',
  styleUrls: ['./actions-bar.component.css']
})
export class ActionsBarComponent implements OnInit {
  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  }
  filterProduct(event: Event){
    this.productService.setFilterString((event.target as HTMLInputElement).value)
  }
  onAddProduct(){
    this.productService.editMode.next(false)
  }


}
