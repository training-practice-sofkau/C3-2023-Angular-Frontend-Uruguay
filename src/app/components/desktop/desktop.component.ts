import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../../interfaces/customer.interface';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})


export class DesktopComponent implements OnInit {

  currentAccount: string = "";
  currentBalance: number = 0;
  customerName: string = '';

  constructor(
    private customerService: CustomerService,
  ) { }

  ngOnInit(): void {
    this.currentAccount = loadCustomerID();
    this.customerService.getCustomerData(this.currentAccount);

    this.currentBalance = getCustomerBalance();
    this.customerName = ' Dear Customer ' //getCustomerName();

  }

}

function loadCustomerID() : string {

  let account = localStorage.getItem('customerID');
  if(account === null) account = "";

  return account;
}

function getCustomerBalance(): number {

  //TODO: recorrer todas las cuentas del cliente y sumar los balances
return 0;

}

function getCustomerName(): string {

  let name = localStorage.getItem("customer");



  if(name === null) name = "";

  return name;

}

