import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { FurnituresComponent } from './furnitures/furnitures.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LoginComponent,
    MobilesComponent,
    LaptopsComponent,
    FurnituresComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
