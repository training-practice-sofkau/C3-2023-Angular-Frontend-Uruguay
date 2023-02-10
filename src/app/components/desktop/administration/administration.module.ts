import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { MaterialModule } from '../../shared/material/material.module';
import { CloseAccountComponent } from './close-account/close-account.component';
import { DisableCustomerComponent } from './disable-customer/disable-customer.component';
import { AdministrationComponent } from './administration.component';



@NgModule({
  declarations: [
    CreateAccountComponent,
    UpdateCustomerComponent,
    CloseAccountComponent,
    DisableCustomerComponent,
    AdministrationComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class AdministrationModule { }
