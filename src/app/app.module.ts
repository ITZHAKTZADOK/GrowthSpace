import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AddItemComponent } from './product/add-item/add-item.component';
import {MatInputModule} from '@angular/material/input';
import { ProductCardComponent } from './product/product-list/product-card/productCard.component';
import {MatCardModule} from '@angular/material/card';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import {ProductService} from "./product/product.service";
import {ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddItemComponent,
    ProductCardComponent,
    ProductFormComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
