import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CustomerComponent } from './customer/customer.component';
import { DepositComponent } from './deposit/deposit.component';
import { LoginComponent} from './login2/login.component';
import { TransferComponent } from './transfer/transfer.component';
import { SingupComponent } from './login2/singup/singup.component';
import { LoginGuard } from './guard/login.guard';

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
