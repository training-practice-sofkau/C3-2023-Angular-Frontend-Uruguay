import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccountsComponent } from './dashboard/view/lists/user-accounts/user-accounts.component';
import { ViewComponent } from './dashboard/view/view.component';
import { AccountsTableComponent } from './shared/accounts-table/accounts-table.component';
import { CustomersTableComponent } from './shared/customers-table/customers-table.component';
import { PageNotFoundComponent } from './404/page-not-found.component';
import { SinginComponent } from './login/sing-in/sing-in.component';
import { SingupComponent } from './login/sing-up/sing-up.component';

const routes: Routes = [
  { path: '', title: 'Dashboard', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'sign-up', title: 'Sign-up', component: SingupComponent },
  { path: 'sign-in', title: 'Sign-in', component: SinginComponent },
  { path: 'dashboard', title: 'Dashboard', component: ViewComponent },
  { path: 'user-accounts', title: 'UserAccounts', component: UserAccountsComponent },
  { path: 'customers-table', title: 'CustomersTable', component: CustomersTableComponent },
  { path: 'accounts-table', title: 'AccountsTable', component: AccountsTableComponent },
  { path: '**', title: 'Dashboard', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
