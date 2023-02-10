import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositComponent } from './AccountMovement/'
;import { TransferComponent } from './AccountMovement/transfer'

import { LoginGuard } from './tools';
import { LoginComponent } from './userLogin-Register';
import { AccountComponent, CustomerComponent } from './UserProfile';



const appRoutes: Routes = [
  { path: 'account', component: AccountComponent,  canActivate: [LoginGuard] },
  { path: 'deposit', component: DepositComponent ,  canActivate: [LoginGuard] },
  { path: 'transfer', component: TransferComponent ,  canActivate: [LoginGuard] },
  { path: 'customer', component: CustomerComponent,  canActivate: [LoginGuard]  },
  { path: 'login', component: LoginComponent  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
