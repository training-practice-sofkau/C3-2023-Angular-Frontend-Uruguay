import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SignInComponent, SignOutComponent, SignUpComponent } from './';



@NgModule({
  declarations: [
    SignInComponent,
    SignOutComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class LoginModule { }
