import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './account-customer/my-account/my-account.component';
import { SinginComponent } from './login/singin/singin.component';

const routes: Routes = [

  { path: 'Myaccount', component: MyAccountComponent},
  { path: 'SignIn', component: SinginComponent}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
