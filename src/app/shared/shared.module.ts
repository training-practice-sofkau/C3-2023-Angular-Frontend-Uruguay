import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    NotfoundComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports:[ToolbarComponent, NotfoundComponent]
})
export class SharedModule { }
