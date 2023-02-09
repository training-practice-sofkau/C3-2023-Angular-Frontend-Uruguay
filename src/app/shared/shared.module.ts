import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { LoginModule } from '../login/login-module.module';



@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterOutlet, //?
    AppRoutingModule,
    LoginModule //?
  ],
  exports:[
    ToolbarComponent,
    FooterComponent,
    HomeComponent
   ]
})
export class SharedModule { }
