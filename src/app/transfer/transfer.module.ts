import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTransferComponent } from './create-transfer/create-transfer.component';
import { TransferListComponent } from './transfer-list/transfer-list.component';



@NgModule({
  declarations: [
    CreateTransferComponent,
    TransferListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransferModule { }
