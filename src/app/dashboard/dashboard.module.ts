import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPipe } from '../dashboard.pipe';
import { MyPipe } from './pipes/my-pipe.pipe';



@NgModule({
  declarations: [
    DashboardPipe,
    MyPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
