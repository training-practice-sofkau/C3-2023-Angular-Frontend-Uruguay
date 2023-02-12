import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeleteComponent } from './delete/delete.component';
import { DepositComponent } from './deposit.component';
import { GetDepositComponent } from './get-deposit/get-deposit.component';
import { NewdepositComponent } from './new-deposit/newdeposit.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: DepositComponent,
    children: [
      {
        path: '',
        component: GetDepositComponent,
      },
      {
        path: 'new',
        component: NewdepositComponent,
      },
      {
        path: 'delete/:id',
        component: DeleteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  declarations: [DepositComponent, GetDepositComponent, NewdepositComponent, DeleteComponent],
  exports: [DepositComponent],
})
export class DepositModule {}
