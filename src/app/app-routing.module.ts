import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { EjercicioComponent } from './prog-functional/ejercicio/ejercicio/ejercicio.component';
import { MyAccountsComponent } from './customer-account/my-accounts/my-accounts.component';
import { UserProfileComponent } from './customer-account/user-profile/user-profile.component';
import { ViewTransfersComponent } from './transactions/view-transfers/view-transfers.component';
import { GuardLoginGuard } from './Guards/guard-login.guard';

const routes: Routes = [

  {path:  '', redirectTo: 'app-home', pathMatch:  'full' },

  {path: 'app-home', component: HomeComponent},
  {path: 'app-user-profile', component: UserProfileComponent, canActivate: [GuardLoginGuard ]}, // 
  {path: 'app-my-accounts', component: MyAccountsComponent, canActivate: [GuardLoginGuard ]}, //
  {path: 'app-view-transfers', component: ViewTransfersComponent, canActivate: [GuardLoginGuard ]}, //
  {path: 'app-ejercicio', component: EjercicioComponent, canActivate: [GuardLoginGuard ]}, //

  {path: '**', component: HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
