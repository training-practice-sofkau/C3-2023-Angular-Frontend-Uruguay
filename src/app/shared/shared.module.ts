import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    DeleteComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[ToolbarComponent]
})
export class SharedModule { }
