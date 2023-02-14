import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { ProfileComponent } from './profile/profile.component';
import { DesktopRoutingModule } from './desktop-routing.module';
import { DepositComponent } from './deposit/deposit.component';
import { TransferComponent } from './transfer/transfer.component';


@NgModule({
  declarations: [
    DesktopComponent,
    DetailsComponent,
    ProfileComponent,
    DepositComponent,
    TransferComponent
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
