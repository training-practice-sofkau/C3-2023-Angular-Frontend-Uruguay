import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainTransferComponent } from './main-transfer/main-transfer.component';
import { CreateTransferFormComponent } from './create-transfer-form/create-transfer-form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'history', title: 'Deposit', component: MainTransferComponent},
      {path: 'new-transfer', title: 'New Transfer', component: CreateTransferFormComponent},
      {path: '**', redirectTo: 'history'}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
    ]
})
export class TransferRoutingModule { }
