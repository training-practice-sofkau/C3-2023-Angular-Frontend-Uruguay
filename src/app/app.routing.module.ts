import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccountsComponent } from './dashboard/view/lists/user-accounts/user-accounts.component';
import { ViewComponent } from './dashboard/view/view.component';
import { AccountsTableComponent } from './shared/accounts-table/accounts-table.component';
import { CustomersTableComponent } from './shared/customers-table/customers-table.component';
import { PageNotFoundComponent } from './404/page-not-found.component';
import { SigninComponent } from './login/sign-in/sign-in.component';
import { SignupComponent } from './login/sign-up/sign-up.component';
import { AuthGuard } from './login/guards/auth.guard';

const routes: Routes = [
  { path: '', title: 'Home', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'sign-up', title: 'Sign-up', component: SignupComponent },
  { path: 'sign-in', title: 'Sign-in', component: SigninComponent },
  { path: 'dashboard', title: 'Dashboard', canActivate: [ AuthGuard ], component: ViewComponent },
  { path: 'user-accounts', title: 'UserAccounts', canActivate: [ AuthGuard ], component: UserAccountsComponent },
  { path: 'customers-table', title: 'CustomersTable', canActivate: [ AuthGuard ], component: CustomersTableComponent },
  { path: 'accounts-table', title: 'AccountsTable', canActivate: [ AuthGuard ], component: AccountsTableComponent },
  { path: '**', title: '404', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
