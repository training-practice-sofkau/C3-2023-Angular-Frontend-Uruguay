import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { ProfileComponent } from './customer/profile/profile.component';

const routes: Routes = [
  {
    path: 'dashboard',
    children: [
      { path: 'view', title: 'Dashboard', component: ViewComponent },
      { path: 'profile', title: 'Profile', component: ProfileComponent },
      { path: '**', redirectTo: '/dashboard/view' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
