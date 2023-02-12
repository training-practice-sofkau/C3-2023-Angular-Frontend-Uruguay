import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    DesktopComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [
    DesktopComponent
  ]
})
export class DesktopModule { }
