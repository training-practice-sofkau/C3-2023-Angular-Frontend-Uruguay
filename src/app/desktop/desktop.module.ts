import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop.component';
import { MaterialModule } from '../material/material.module';
import { LoginModule } from '../login/login-module.module';



@NgModule({
  declarations: [
    DesktopComponent,
  ],
  imports: [
    CommonModule,
    LoginModule,
    MaterialModule,
  ]
})
export class DesktopModule { }
