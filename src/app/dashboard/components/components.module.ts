import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';
import { ComponentsRouteModule } from './components-route.module';



@NgModule({
  declarations: [
    DeleteComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentsRouteModule,
  ]
})
export class ComponentsModule { }
