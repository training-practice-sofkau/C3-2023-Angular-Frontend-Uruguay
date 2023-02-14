import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './deposit/deposit.component';
import { AuthGuard } from 'src/app/login/guards/auth.guard';

const routes: Routes = [{
  path: 'accounts',
  children: [
    { path: 'deposits', title: 'Deposits', component: DepositComponent, canActivate: [ AuthGuard ] },
    { path: '**', redirectTo: '/dashboard/view' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
