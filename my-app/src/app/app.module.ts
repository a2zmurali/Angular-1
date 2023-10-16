import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { MobileDetailComponent } from './mobile-detail/mobile-detail.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    MobilesComponent,
    LaptopsComponent,
    MobileDetailComponent,
    LoginFormComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Template driven forms
    ReactiveFormsModule  //Reactive forms

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }