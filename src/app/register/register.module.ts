import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountTypeComponent } from './account-type/account-type.component';
import { DocumentTypeComponent } from './document-type/document-type.component';



@NgModule({
  declarations: [
    AccountTypeComponent,
    DocumentTypeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RegisterModule { }
