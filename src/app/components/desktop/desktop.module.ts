import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { DesktopComponent } from './desktop.component';
import { DesktopRoutingModule } from './desktop-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main/main.component';
import { DepositComponent } from './deposit/deposit.component';
import { TransferComponent } from './transfer/transfer.component';
import { MovementsComponent } from './movements/movements.component';


@NgModule({
  declarations: [
    DesktopComponent,
    ProfileComponent,
    MainComponent,
    DepositComponent,
    TransferComponent,
    MovementsComponent
  ],
  imports: [
    CommonModule,
    DesktopRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class DesktopModule { }
