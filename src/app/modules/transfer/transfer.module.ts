import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTransferComponent } from './create-transfer/create-transfer.component';
import { GetTransferComponent } from './get-transfer/get-transfer.component';



@NgModule({
  declarations: [
    CreateTransferComponent,
    GetTransferComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransferModule { }
