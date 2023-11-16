import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'Signup', component: SignUpComponent},
  {path: 'home', component: HomeComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


