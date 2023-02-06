import { GetbalanceComponent } from './get-balance/getbalance.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccountComponent } from './account.component';
import { AddbalanceComponent } from './add-balance/addbalance.component';
import { CreateaccounttypeComponent } from './create-account-type/createaccounttype.component';
import { GetlistofaccountComponent } from './get-list-of-account/getlistofaccount.component';
import { RemovebalanceComponent } from './remove-balance/removebalance.component';
@NgModule({
  imports: [CommonModule  ],
  declarations: [AccountComponent,AddbalanceComponent,GetbalanceComponent, CreateaccounttypeComponent, GetlistofaccountComponent, RemovebalanceComponent],
  exports: [AccountComponent],
})
export class AccountModule {}
