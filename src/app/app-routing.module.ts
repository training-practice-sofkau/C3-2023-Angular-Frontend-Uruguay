import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './account-customer/my-account/my-account.component';
import { ProfileComponent } from './account-customer/profile/profile.component';
import { SinginComponent } from './login/singin/singin.component';
import { SingupComponent } from './login/singup/singup.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { EjercicioComponent } from './prog-functional/ejercicio/ejercicio.component';
import { GuardsGuard } from './login/guards/guards.guard';

const routes: Routes = [
  
  { path: '', redirectTo:'/SignIn', pathMatch:"full"}, 

  { path: 'Myaccount', component: MyAccountComponent, canActivate:[GuardsGuard]},
  { path: 'SignIn', component: SinginComponent}, 
  { path: 'SignUp', component: SingupComponent}, 
  { path: 'profile', component: ProfileComponent, canActivate:[GuardsGuard]}, 
  { path: 'ejercicio', component: EjercicioComponent, canActivate:[GuardsGuard]}, 
  
  { path: '**', component: NotfoundComponent}, 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
