import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinginComponent } from './sing-in/singin.component';
import { SingupComponent } from './sing-up/singup.component';
import { SingOutComponent } from './sing-out/sing-out.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    SinginComponent,
    SingupComponent,
    SingOutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class LoginModule { }
