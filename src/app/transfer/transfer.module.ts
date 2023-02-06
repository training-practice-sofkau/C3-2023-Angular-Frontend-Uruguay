import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TransferComponent } from './transfer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TransferComponent],
  exports: [TransferComponent],
})
export class TransferModule {}
