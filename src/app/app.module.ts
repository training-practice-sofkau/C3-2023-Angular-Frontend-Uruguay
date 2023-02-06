import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DesktopModule } from './desktop/desktop.module';
import { AdministrationModule } from './desktop/administration/administration.module';
import { OperationModule } from './desktop/operation/operation.module';
import { ManagementModule } from './desktop/management/management.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    LoginModule,
    DesktopModule,
    AdministrationModule,
    OperationModule,
    ManagementModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
