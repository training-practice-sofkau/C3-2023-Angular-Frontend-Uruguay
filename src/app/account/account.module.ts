import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccountComponent } from './account.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AccountComponent],
  exports: [AccountComponent],
})
export class AccountModule {}
