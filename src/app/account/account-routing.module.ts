import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDashboardComponent } from './account-dashboard/account-dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', title: 'Dashboard',component: AccountDashboardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AccountRoutingModule { }
