import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from 'path';
import { CustomerChangePasswordComponent } from './customer/customer-change-password/customer-change-password.component';
import { PermissionsGuard } from './customer/guards/permissions.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login-routing.module')
    .then(m => m.LoginRoutingModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./account/account-routing.module')
    .then(m => m.AccountRoutingModule),
    canActivate: [PermissionsGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./customer/customer-routing.module')
    .then(m => m.CustomerRoutingModule),
    canActivate: [PermissionsGuard]
  },
  {
    path: 'deposit',
    loadChildren: () => import('./deposit/deposit-routing.module')
    .then(m => m.DepositRoutingModule),
    canActivate: [PermissionsGuard]
  },
  {
    path: 'transfer',
    loadChildren: () => import('./transfer/transfer-routing.module')
    .then(m => m.TransferRoutingModule),
    canActivate: [PermissionsGuard]
  },
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
