import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { FindAllComponent } from './find-all/find-all.component';
import { FindByOneIdComponent } from './find-by-one-id/find-by-one-id.component';
import { DeleteSoftComponent } from './delete-soft/delete-soft.component';
import { DeleteHardComponent } from './delete-hard/delete-hard.component';
import { CreateTypeComponent } from './create-type/create-type.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    FindAllComponent,
    FindByOneIdComponent,
    DeleteSoftComponent,
    DeleteHardComponent,
    CreateTypeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[ToolbarComponent]
})
export class SharedModule { }
