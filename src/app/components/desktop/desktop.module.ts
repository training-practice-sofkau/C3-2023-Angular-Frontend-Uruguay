import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { DesktopComponent } from './desktop.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    DesktopComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,

  ],

})
export class DesktopModule { }
