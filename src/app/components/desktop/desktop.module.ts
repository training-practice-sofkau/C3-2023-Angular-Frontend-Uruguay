import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './profile/profile.component';
import { DesktopRoutingModule } from './desktop-routing.module';


@NgModule({
  declarations: [
    DesktopComponent,
    DetailsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    DesktopRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    DesktopComponent
  ]


})
export class DesktopModule { }
