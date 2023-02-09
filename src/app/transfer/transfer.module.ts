import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTransferFormComponent, TransferHistoryComponent, TransferInfoComponent } from './';
import { SharedModule } from '../shared/shared.module';
import { MainTransferComponent } from './main-transfer/main-transfer.component';

@NgModule({
  declarations: [CreateTransferFormComponent, TransferHistoryComponent, TransferInfoComponent, MainTransferComponent],
  imports: [CommonModule, SharedModule],
  exports: [CreateTransferFormComponent, TransferHistoryComponent, TransferInfoComponent]
})
export class TransferModule {}
