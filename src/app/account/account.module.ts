import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccountComponent } from './account.component';
import { CreateaccounttypeComponent } from './create-account-type/createaccounttype.component';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';

@NgModule({
  imports: [CommonModule,RouterModule  ],
  declarations: [AccountComponent, CreateaccounttypeComponent,   ],
  exports: [AccountComponent],
  providers: [CustomerComponent, CreateaccounttypeComponent],

})
export class AccountModule {}
