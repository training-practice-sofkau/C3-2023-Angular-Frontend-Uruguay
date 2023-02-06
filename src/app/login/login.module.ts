import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    SignInComponent,
    SignOutComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class LoginModule { }
