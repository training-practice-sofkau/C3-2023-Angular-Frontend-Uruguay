import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { MaterialModule } from '../../material/material.module';
import { OperationModule } from '../operation/operation.module';
import { CloseAccountComponent } from './close-account/close-account.component';
import { DisableCustomerComponent } from './disable-customer/disable-customer.component';
import { RemoveDepositComponent } from './remove-deposit/remove-deposit.component';
import { CancelTransferenceComponent } from './cancel-transference/cancel-transference.component';



@NgModule({
  declarations: [
    CreateAccountComponent,
    UpdateAccountComponent,
    UpdateCustomerComponent,
    CloseAccountComponent,
    DisableCustomerComponent,
    RemoveDepositComponent,
    CancelTransferenceComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    OperationModule
  ]
})
export class AdministrationModule { }
