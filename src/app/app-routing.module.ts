import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjercicioComponent } from './prog-functional/ejercicio/ejercicio.component';
import { SearchComponent } from './dashboard/components/search/search.component';
import { GuardGuard } from './modules/shared/guards/guard.guard';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { DepositComponent } from './dashboard/transaction/deposit/deposit.component';
import { TransferComponent } from './dashboard/transaction/transfer/transfer.component';


const routes: Routes = [

{
    path: '',
    redirectTo: 'login/home',
    pathMatch: 'full',
},
{
  path: 'login',
  loadChildren: () => import('../app/modules/login/login-module.module').then(m => m.LoginModule)
},
{
  path: 'account',
  loadChildren: () => import('../app/dashboard/account/account.module').then(m => m.AccountModule)
},
{
  path: 'components',
  loadChildren: () => import('../app/dashboard/components/components.module').then(m => m.ComponentsModule)
},
{ path: 'ejercicio', component: EjercicioComponent, canActivate: [GuardGuard] },
{ path: 'transfer', component: TransferComponent, canActivate: [GuardGuard] },
{ path: 'deposit', component: DepositComponent, canActivate: [GuardGuard] },

{
  path: '**',
  component: PageNotFoundComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
