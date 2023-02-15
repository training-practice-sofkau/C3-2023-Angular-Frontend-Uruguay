import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/guards/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: '/dashboard/view', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'account',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./dashboard/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'dashboard',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'notfound',
    loadChildren: () => import('./404/page-not-found.module').then(m => m.PageNotFoundModule)
  },
  { path: '**', redirectTo: '/notfound' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
