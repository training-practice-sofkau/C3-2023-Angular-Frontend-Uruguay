import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { UpComponent } from './up/up.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    UpComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[ToolbarComponent]
})
export class SharedModule { }
