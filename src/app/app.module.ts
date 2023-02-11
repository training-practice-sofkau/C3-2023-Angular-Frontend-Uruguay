import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './components/shared/shared.module';
import { MaterialModule } from './components/shared/material/material.module';
import { LoginModule } from './components/login/login.module';
import { DesktopModule } from './components/desktop/desktop.module';

//Components
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    AppRoutingModule,
    LoginModule,
    DesktopModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
