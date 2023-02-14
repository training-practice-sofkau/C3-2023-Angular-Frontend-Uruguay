import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { AuthGuard } from '../login/guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    children: [
      { path: 'view', title: 'Dashboard', component: ViewComponent, canActivate: [ AuthGuard ] },
      { path: 'profile', title: 'Profile', component: ProfileComponent, canActivate: [ AuthGuard ] },
      { path: '**', redirectTo: '/dashboard/view' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
