import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DesktopComponent } from '../desktop/desktop.component';


@NgModule({
  declarations: [
    SignInComponent,
    SignOutComponent,
    SignUpComponent,
    DesktopComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class LoginModule { }
