import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccountComponent } from './account.component';
import { CreateaccounttypeComponent } from './create-account-type/createaccounttype.component';
@NgModule({
  imports: [CommonModule  ],
  declarations: [AccountComponent, CreateaccounttypeComponent,  ],
  exports: [AccountComponent],
})
export class AccountModule {}
