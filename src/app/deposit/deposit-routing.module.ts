import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainDepositComponent } from './main-deposit/main-deposit.component';
import { CreateDepositFormComponent } from './create-deposit-form/create-deposit-form.component';
import { DepositHistoryComponent } from './deposit-history/deposit-history.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'history', title: 'Deposit', component: DepositHistoryComponent},
      {path: 'new-deposit', title: 'New Deposit', component: CreateDepositFormComponent},
      {path: '**', redirectTo: 'history'}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DepositRoutingModule { }
