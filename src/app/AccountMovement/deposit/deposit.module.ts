import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeleteComponent } from './delete/delete.component';

import { DepositComponent } from './deposit.component';
import { GetDepositComponent } from './get-deposit/get-deposit.component';
import { NewdepositComponent } from './new-deposit/newdeposit.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DepositComponent,GetDepositComponent,NewdepositComponent,DeleteComponent],
  exports: [DepositComponent],
})
export class DepositModule {}
