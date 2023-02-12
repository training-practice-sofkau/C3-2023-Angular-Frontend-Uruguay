import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';
import { SingOutComponent } from './sing-out/sing-out.component';
import { MaterialModule } from '../../material/material.module';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [
    SinginComponent,
    SingupComponent,
    SingOutComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    SinginComponent,
    SingupComponent,
    LoginComponent
  ]
})
export class LoginModule { }
