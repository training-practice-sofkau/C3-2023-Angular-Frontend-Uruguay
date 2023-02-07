import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoDepositComponent } from './info-deposit/info-deposit.component';
import { InfoTransferComponent } from './info-transfer/info-transfer.component';
import { TypeAccountComponent } from './type-account/type-account.component';
import { DocumentTypeComponent } from './document-type/document-type.component';
import { CustomerComponent } from './customer/customer.component';
import { AccountComponent } from './account/account.component';



@NgModule({
  declarations: [
    InfoDepositComponent,
    InfoTransferComponent,
    TypeAccountComponent,
    DocumentTypeComponent,
    CustomerComponent,
    AccountComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdministratorModule { }
