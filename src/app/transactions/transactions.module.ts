import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { NewDepositComponent } from './new-deposit/new-deposit.component';
import { ViewTransfersComponent } from './view-transfers/view-transfers.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [   //TODAS ESTAS DECLARACIONES INDICAN QUE ESTOS COMPONENTES SON PARTE DE TRANSACTIONS.MODULE
    NewTransferComponent,
    NewDepositComponent,
    ViewTransfersComponent
  ],
  imports: [
    CommonModule, //SIRVE PARA DIRECTIVAS DE ngIf ngFor y Pipes
    TransactionsRoutingModule,  //RUTAS PERESOSAS 
    FormsModule,  
    ReactiveFormsModule

  ]
})
export class TransactionsModule { }
