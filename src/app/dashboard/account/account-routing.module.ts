import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './deposit/deposit.component';

const routes: Routes = [{
  path: 'accounts',
  children: [
    { path: 'deposits', title: 'Deposits', component: DepositComponent },
    { path: '**', redirectTo: '/dashboard/view' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
