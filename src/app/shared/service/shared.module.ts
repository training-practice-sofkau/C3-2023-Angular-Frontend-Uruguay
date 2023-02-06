import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MaterialModule } from '../../material/material.module';
import { DeleteBtnComponent } from '../delete-btn/delete-btn.component';
import { CreateBtnComponent } from '../create-btn/create-btn.component';
import { FooterComponent } from '../footer/footer.component';
import { ModifyBtnComponent } from '../modify-btn/modify-btn.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    DeleteBtnComponent,
    CreateBtnComponent,
    FooterComponent,
    ModifyBtnComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[ToolbarComponent]
})
export class SharedModule { }
