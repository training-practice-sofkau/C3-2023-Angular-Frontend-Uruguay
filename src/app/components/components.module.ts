import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { FindAllComponent } from './find-all/find-all.component';
import { FindByOneIdComponent } from './find-by-one-id/find-by-one-id.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FindAllComponent,
    FindByOneIdComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    
  ],
  exports : [
    FindAllComponent,
    FindByOneIdComponent,
  ]
})
export class ComponentsModule { }
