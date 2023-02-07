import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationWindowsComponent, ToolbarComponent, PaginationToolComponent, FooterComponent } from './';



@NgModule({
  declarations: [ConfirmationWindowsComponent,
  FooterComponent,
PaginationToolComponent,
ToolbarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
