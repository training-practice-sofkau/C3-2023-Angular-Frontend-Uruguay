import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
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
    ReactiveFormsModule,
  ],
  exports: [
    SinginComponent,
    SingupComponent,
  ],
})
export class LoginModule { }
