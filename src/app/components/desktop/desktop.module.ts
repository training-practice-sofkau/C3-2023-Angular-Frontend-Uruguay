import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DesktopComponent } from './desktop.component';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { DesktopRoutingModule } from './desktop-routing.module';



@NgModule({
  declarations: [
    DesktopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DesktopRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class DesktopModule { }
