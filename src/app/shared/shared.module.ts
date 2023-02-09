import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { UpComponent } from './up/up.component';
import { CustomersTableComponent } from './customers-table/customers-table.component';
import { AccountsTableComponent } from './accounts-table/accounts-table.component';
import { AppRoutingModule } from '../app.routing.module';

@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    UpComponent,
    CustomersTableComponent,
    AccountsTableComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MaterialModule,
  ],
  exports:[ToolbarComponent, FooterComponent, UpComponent, CustomersTableComponent, AccountsTableComponent]
})
export class SharedModule { }
