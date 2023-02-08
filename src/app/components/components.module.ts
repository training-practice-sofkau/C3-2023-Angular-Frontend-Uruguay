import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    DeleteComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
