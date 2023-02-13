import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountModule } from './account/account.module';
import { ViewComponent } from './view/view.component';
import { UserAccountsComponent } from './view/lists/user-accounts/user-accounts.component';
import { SharedModule } from "../shared/shared.module";
import { LastMovementsCustomerComponent } from './view/lists/last-movements-customer/last-movements-customer.component';
import { CurrencyComponent } from './view/lists/currency/currency.component';
import { MonthlyExpensesComponent } from './view/lists/monthly-expenses/monthly-expenses.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../login/guards/auth.guard';
import { SigninComponent } from '../login/sign-in/sign-in.component';
import { SignupComponent } from '../login/sign-up/sign-up.component';
import { AccountsTableComponent } from '../shared/accounts-table/accounts-table.component';
import { DepositComponent } from './account/deposit/deposit.component';

const routes: Routes = [
  { path: 'sign-up', title: 'Sign-up', loadChildren: () => import('../login/login-module.module').then(m => m.LoginModule),
  canActivate: [ AuthGuard ], component: SignupComponent },
  { path: 'sign-in', title: 'Sign-in', loadChildren: () => import('../login/login-module.module').then(m => m.LoginModule),
  canActivate: [ AuthGuard ], component: SigninComponent },
  { path: 'dashboard', title: 'Dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
  canActivate: [ AuthGuard ], component: ViewComponent },
  { path: 'deposits', title: 'Deposits', loadChildren: () => import('../dashboard/account/account.module').then(m => m.AccountModule),
  canActivate: [ AuthGuard ], component: DepositComponent }
]
@NgModule({
    declarations: [
        ViewComponent,
        UserAccountsComponent,
        LastMovementsCustomerComponent,
        CurrencyComponent,
        MonthlyExpensesComponent,
        ProfileComponent
    ],
    exports: [
        ViewComponent,
        UserAccountsComponent
    ],
    imports: [
        CommonModule,
        AccountModule,
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class DashboardModule { }
