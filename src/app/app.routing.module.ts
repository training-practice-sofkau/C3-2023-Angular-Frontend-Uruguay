import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './dashboard/view/view.component';
import { AccountsTableComponent } from './shared/accounts-table/accounts-table.component';
import { PageNotFoundComponent } from './404/page-not-found.component';
import { SigninComponent } from './login/sign-in/sign-in.component';
import { SignupComponent } from './login/sign-up/sign-up.component';
import { AuthGuard } from './login/guards/auth.guard';
import { DepositComponent } from './dashboard/account/deposit/deposit.component';
import { ProfileComponent } from './dashboard/customer/profile/profile.component';

const routes: Routes = [
  { path: '', title: 'Home', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'sign-up', title: 'Sign-up', component: SignupComponent },
  { path: 'sign-in', title: 'Sign-in', component: SigninComponent },
  { path: 'dashboard', title: 'Dashboard', canActivate: [ AuthGuard ], component: ViewComponent },
  { path: 'deposits', title: 'Depositos', canActivate: [ AuthGuard ], component: DepositComponent },
  { path: 'app-profile', title: 'Perfil', canActivate: [ AuthGuard ], component: ProfileComponent },
  { path: 'accounts-table', title: 'AccountsTable', canActivate: [ AuthGuard ], component: AccountsTableComponent },
  { path: '**', title: '404', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
