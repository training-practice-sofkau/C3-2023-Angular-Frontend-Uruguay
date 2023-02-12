import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeleteComponent } from './delete/delete.component';
import { TransferComponent } from './transfer.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { GethistoryComponent } from './gethistory/gethistory.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: TransferComponent,
    children: [
      {
        path: 'new-transfer',
        component: NewTransferComponent
      },
      {
        path: 'gethistory',
        component: GethistoryComponent
      },
      {
        path: 'delete',
        component: DeleteComponent
      }
    ]
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [
    TransferComponent,
    DeleteComponent,
    NewTransferComponent,
    GethistoryComponent,

  ]
})
export class TransferModule {}
