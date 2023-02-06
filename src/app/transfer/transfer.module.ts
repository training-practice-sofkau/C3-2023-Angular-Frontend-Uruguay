import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferInfoComponent } from './transfer-info/transfer-info.component';
import { CreateTransferFormComponent } from './create-transfer-form/create-transfer-form.component';
import { TransferHistoryComponent } from './transfer-history/transfer-history.component';
import { TransferFinderComponent } from './transfer-finder/transfer-finder.component';



@NgModule({
  declarations: [
    TransferInfoComponent,
    CreateTransferFormComponent,
    TransferHistoryComponent,
    TransferFinderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransferModule { }
