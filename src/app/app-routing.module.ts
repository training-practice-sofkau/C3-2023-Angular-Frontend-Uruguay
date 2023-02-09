import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { EjercicioComponent } from './prog-functional/ejercicio/ejercicio/ejercicio.component';
import { MyAccountsComponent } from './customer-account/my-accounts/my-accounts.component';
import { UserProfileComponent } from './customer-account/user-profile/user-profile.component';

const routes: Routes = [

  {path:  '', redirectTo: 'app-home', pathMatch:  'full' },

  {path: 'app-home', component: HomeComponent},
  {path: 'app-user-profile', component: UserProfileComponent},
  {path: 'app-my-accounts', component: MyAccountsComponent},
  {path: 'app-ejercicio', component: EjercicioComponent},

  {path: '**', component: HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
