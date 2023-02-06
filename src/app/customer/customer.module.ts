import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomerComponent } from './customer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomerComponent],
  exports: [CustomerComponent],
})
export class CustomerModule {}
