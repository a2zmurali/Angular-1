import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { FurnituresComponent } from './furnitures/furnitures.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductListComponent,
    children: [
      { path: 'Mobiles', component: MobilesComponent },
      { path: 'Furnitures', component: FurnituresComponent },
      { path: 'Laptops', component: LaptopsComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
