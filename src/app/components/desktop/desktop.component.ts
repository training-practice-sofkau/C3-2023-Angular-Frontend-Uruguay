import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';


@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})


export class DesktopComponent implements OnInit {

  showMainPage: boolean = true;
  showProfilePage: boolean = false;
  showDepositPage: boolean = false;
  showTransferPage: boolean = false;


  currentAccount: string = "";
  currentBalance: number = 0;
  customerName: string = '';



  constructor(
    private customerService: CustomerService,

  ) { }

  ngOnInit(): void {
    this.currentAccount = loadCustomerID();
    this.customerService.getCustomerData(this.currentAccount);
    this.customerService.getCustomerAccounts(loadCustomerID()) ;

    this.currentBalance = getCustomerBalance();
    this.customerName = getCustomerName();

    this.showMain();
  }


  showMain(){

    this.showMainPage = true;
    this.showProfilePage = false;
    this.showDepositPage = false;
    this.showTransferPage = false;
  }

  showProfile(){
    this.showMainPage = false;
    this.showProfilePage = true;
    this.showDepositPage = false;
    this.showTransferPage = false;
  }

  makeDeposit(){

    this.showMainPage = false;
    this.showProfilePage = false;
    this.showDepositPage = true;
    this.showTransferPage = false;
  }

  makeTransfer(){
    this.showMainPage = false;
    this.showProfilePage = false;
    this.showDepositPage = false;
    this.showTransferPage = true;
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

  let name: string = "";
  let customerData = localStorage.getItem("customer");

  if( customerData != null) {
    let jsonObj = JSON.parse(customerData);
    name = jsonObj.fullname;
  }
  return name;

}


