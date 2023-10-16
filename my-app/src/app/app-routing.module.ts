import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MobileDetailComponent } from './mobile-detail/mobile-detail.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'products', component:ProductListComponent},
    {path:'Mobiles',component:MobilesComponent},
    {path:'Laptops', component:LaptopsComponent},
    {path:'mobile-detail/:id',component:MobileDetailComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'Signup', component: SignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
