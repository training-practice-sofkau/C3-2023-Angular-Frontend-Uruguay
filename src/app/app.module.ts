import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { MaterialModule } from './components/shared/material/material.module';
import { LoginModule } from './components/login/login.module';
import { DesktopModule } from './components/desktop/desktop.module';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    LoginModule,
    DesktopModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
