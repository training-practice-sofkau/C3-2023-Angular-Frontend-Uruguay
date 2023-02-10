import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeleteComponent } from './delete/delete.component';

import { TransferComponent } from './transfer.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { GethistoryComponent } from './gethistory/gethistory.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TransferComponent,  DeleteComponent, NewTransferComponent,GethistoryComponent],
  exports: [TransferComponent],
})
export class TransferModule {}
