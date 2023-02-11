import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewTransfersComponent } from './view-transfers/view-transfers.component';
import { HomeComponent } from '../shared/home/home.component';



const routes : Routes = [

    { path : '',
      children: [
        {path: 'app-view-transfers', component: ViewTransfersComponent },
        {path: '**', component: HomeComponent}
      ]
    },
 
]



@NgModule({
  declarations: [],
  imports: [CommonModule,
            RouterModule.forChild(routes)]
})
export class TransactionsRoutingModule { }
