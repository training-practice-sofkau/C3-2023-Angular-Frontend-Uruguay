import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerChangePasswordComponent } from './customer-change-password/customer-change-password.component';
import { ModifyCustomerComponent } from './modify-customer/modify-customer.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', title: 'Profile', component: CustomerInfoComponent },
      { path: 'change-password', title: 'Change Password', component: CustomerChangePasswordComponent},
      { path: 'edit-profile', title: 'Edit Profile', component: ModifyCustomerComponent},
      { path: '**', redirectTo: ''}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class CustomerRoutingModule { }
