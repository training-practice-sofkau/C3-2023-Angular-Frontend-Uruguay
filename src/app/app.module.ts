import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AccountModule } from './account/account.module';
import { CustomerModule } from './customer/customer.module';
import { DepositModule } from './deposit/deposit.module';
import { TransferModule } from './transfer/transfer.module';
import { AuthService } from './login/services/auth.service';
import { AccountService } from './account/service/account.service';
import { DepositService } from './deposit/service/deposit.service';
import { TransferService } from './transfer/service/transfer.service';
import { CustomerService } from './customer/service/customer.service';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MyTableComponent } from './my-table/my-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HelpComponent } from './help/help.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    DashboardComponent,
    MyTableComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MaterialModule,
    SharedModule,
    LoginModule,
    AccountModule,
    CustomerModule,
    DepositModule,
    TransferModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [AuthService,AccountService,DepositService,TransferService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
