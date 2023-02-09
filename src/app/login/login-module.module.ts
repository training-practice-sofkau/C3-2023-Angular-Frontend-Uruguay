import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinginComponent } from './sing-in/sing-in.component';
import { SingupComponent } from './sing-up/sing-up.component';
import { SingOutComponent } from './sing-out/sing-out.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SinginComponent,
    SingupComponent,
    SingOutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
