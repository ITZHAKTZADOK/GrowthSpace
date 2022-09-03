import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "./product/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'My Store';
  loading: boolean = true;
  loadingSubscriber: Subscription;
  constructor(private productService: ProductService ) {
  }

  ngOnInit(){
    this.loadingSubscriber = this.productService.loading
      .subscribe((loadingStatus: boolean)=>{
        this.loading = loadingStatus;
      })
  }

  ngOnDestroy(){
    this.loadingSubscriber.unsubscribe()
  }
}
