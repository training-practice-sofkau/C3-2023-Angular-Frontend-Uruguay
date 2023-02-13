import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPipe } from './pipes/my-pipe.pipe';



@NgModule({
  declarations: [
    MyPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
