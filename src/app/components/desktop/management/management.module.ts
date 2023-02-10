import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandleDocumentTypeComponent } from './handle-document-type/handle-document-type.component';
import { HandleAccountTypeComponent } from './handle-account-type/handle-account-type.component';
import { HandleCustomerStatusComponent } from './handle-customer-status/handle-customer-status.component';
import { HandleDepositStatusComponent } from './handle-deposit-status/handle-deposit-status.component';
import { HandleTransferStatusComponent } from './handle-transfer-status/handle-transfer-status.component';
import { UpdateAccountDataComponent } from './update-account-data/update-account-data.component';
import { ManagementComponent } from './management.component';




@NgModule({
  declarations: [
    HandleDocumentTypeComponent,
    HandleAccountTypeComponent,
    HandleCustomerStatusComponent,
    HandleDepositStatusComponent,
    HandleTransferStatusComponent,
    UpdateAccountDataComponent,
    ManagementComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class ManagementModule { }
