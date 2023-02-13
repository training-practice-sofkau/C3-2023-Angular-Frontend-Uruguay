import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SignInComponent, SignOutComponent, SignUpComponent } from './';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SignInComponent,
    SignOutComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [SignInComponent,
    SignOutComponent,
    SignUpComponent]
})
export class LoginModule { }
