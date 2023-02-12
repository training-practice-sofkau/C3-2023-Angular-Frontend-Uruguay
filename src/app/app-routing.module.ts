import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';



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
{
  path: 'transactions',
  loadChildren: () => import('../app/dashboard/transaction/transaction.module').then(m => m.TransactionModule)
},

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
