import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewTransfersComponent } from './view-transfers/view-transfers.component';
import { HomeComponent } from '../shared/home/home.component';
import { NewDepositComponent } from './new-deposit/new-deposit.component';



const routes : Routes = [

    { path : '',
      children: [
        {path: 'app-view-transfers', component: ViewTransfersComponent },
        {path: 'app-new-deposit', component: NewDepositComponent },
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
