import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    DesktopComponent,
    MainComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [
    DesktopComponent,
    MainComponent,
    ProfileComponent
  ]
})
export class DesktopModule { }
