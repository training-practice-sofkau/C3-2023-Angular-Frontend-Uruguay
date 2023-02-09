import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'sign-in', title: 'Sign In', component: SignInComponent },
      { path: 'sign-up', title: 'Sign Up', component: SignUpComponent },
      { path: '**', redirectTo: 'sign-in'}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class LoginRoutingModule { }
