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

  {path: 'app-ejercicio', component: EjercicioComponent, canActivate: [GuardLoginGuard ]},

  {path: 'transactions', loadChildren:()=> import('./transactions/transactions.module').then(m => m.TransactionsModule)}, //child

  {path: 'customer-account', loadChildren:()=> import('./customer-account/customer-account.module').then(m => m.CustomerAccountModule)}, //child

  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
