import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { CheckAccountInfoComponent } from './check-account-info/check-account-info.component';
import { CheckAccountMovementComponent } from './check-account-movement/check-account-movement.component';
import { MakeDepositComponent } from './make-deposit/make-deposit.component';
import { MakeTransferComponent } from './make-transfer/make-transfer.component';
import { OperationComponent } from './operation.component';



@NgModule({
  declarations: [
    CheckAccountInfoComponent,
    CheckAccountMovementComponent,
    MakeDepositComponent,
    MakeTransferComponent,
    OperationComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class OperationModule { }
