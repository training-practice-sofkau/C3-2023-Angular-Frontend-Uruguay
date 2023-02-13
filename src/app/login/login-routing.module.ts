import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'login',
    children: [
      { path: 'sign-in', title: 'Sign-in', component: SigninComponent },
      { path: 'sign-up', title: 'Sign-up', component: SignupComponent },
      { path: '**', redirectTo: '/dashboard/view' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
