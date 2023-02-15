import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
 //SinginComponent,
 //SingupComponent,
    //CustomerComponent,
   // ProfileComponent,
    CustomerProfileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    //LoginModule,
    FormsModule
  ],
  exports: [HomeComponent, CustomerProfileComponent]
})
export class PagesModule { }
