import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SingOutComponent } from '../login2/sing-out/sing-out.component';



@NgModule({
  declarations: [
    ToolbarComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[ToolbarComponent],
  providers: [SingOutComponent]

})
export class SharedModule { }
