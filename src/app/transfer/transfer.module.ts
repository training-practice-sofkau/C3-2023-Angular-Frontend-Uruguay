import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTransferFormComponent, TransferHistoryComponent, TransferInfoComponent } from './';
import { SharedModule } from '../shared/shared.module';
import { MainTransferComponent } from './main-transfer/main-transfer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateTransferFormComponent, TransferHistoryComponent, TransferInfoComponent, MainTransferComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CreateTransferFormComponent, TransferHistoryComponent, TransferInfoComponent]
})
export class TransferModule {}
