import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../tools'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// import { SingOutComponent } from '../userLogin-Register/login2/sing-out/sing-out.component';
import { ToolbarrComponent } from './toolbarr/toolbarr.component'



@NgModule({
  declarations: [
    ToolbarrComponent ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    RouterModule,

  ],
  exports:[ToolbarrComponent]

})
export class SharedModule {
  static forRoot(): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}
