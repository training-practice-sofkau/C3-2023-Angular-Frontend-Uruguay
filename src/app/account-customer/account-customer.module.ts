import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account/my-account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { CustomerService } from './services/customer.service';



@NgModule({
  declarations: [
    MyAccountComponent,
    NewAccountComponent,
    ProfileComponent
    
  ],
  imports: [
    CommonModule
    
  ],
  exports:[

    ProfileComponent

  ],
  providers:[ CustomerService ]
})
export class AccountCustomerModule { }
