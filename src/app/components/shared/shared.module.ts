import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../../app-routing.module';
import { DesktopNavbarComponent } from './desktop-navbar/desktop-navbar.component';




@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DesktopNavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule
  ],
  exports:[NavbarComponent, FooterComponent, RouterModule, DesktopNavbarComponent]
})
export class SharedModule { }
