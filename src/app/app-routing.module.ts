import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './tools';
import { LoginComponent } from './userLogin-Register';

export const appRoutes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./UserProfile').then(m => m.AccountModule),
    canActivate: [LoginGuard]
  },
  {
  path: 'deposit',
  loadChildren: () => import('./AccountMovement').then(m => m.DepositModule),
  canActivate: [LoginGuard]
},
{
  path: 'transfer',
  loadChildren: () => import('./AccountMovement/transfer').then(m => m.TransferModule),
  canActivate: [LoginGuard]
},
{
  path: 'customer',
  loadChildren: () => import('./UserProfile').then(m => m.CustomerModule),
  canActivate: [LoginGuard]
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: '**',
  redirectTo: '/login',
  pathMatch: 'full'
},
{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}
];
;

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
