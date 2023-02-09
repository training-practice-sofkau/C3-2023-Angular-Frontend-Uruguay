import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ToolbarComponent,
  FooterComponent,
  ConfirmationWindowsComponent,
} from './';
import { MaterialModule } from '../material';
import { LoginModule } from '../login/login-module.module';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [ToolbarComponent, FooterComponent, ConfirmationWindowsComponent, PaginationComponent],
  imports: [CommonModule, MaterialModule, LoginModule],
  exports: [ToolbarComponent, FooterComponent, ConfirmationWindowsComponent, PaginationComponent]
})
export class SharedModule {}
