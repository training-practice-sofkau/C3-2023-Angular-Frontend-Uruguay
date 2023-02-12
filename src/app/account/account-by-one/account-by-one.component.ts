import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Account } from '../interfaces/account';

@Component({
  selector: 'app-account-by-one',
  templateUrl: './account-by-one.component.html',
  styleUrls: ['./account-by-one.component.scss']
})
export class AccountByOneComponent implements OnInit {
  
  accountId: string = ""; 
  protected account! : Account;

  constructor(public  accountservice : AccountService,
    private readonly route : ActivatedRoute,
    private router :Router){}

  ngOnInit(): void {
    this.paramsCustomerId();
    this.updateOneAccount(this.accountId);
    this.getAccount();
    
  }


  // Capturo el parametro que se pasa por la rota
  paramsCustomerId():void{ 
    this.route.params.subscribe(
      (params : Params) => {
        this.accountId = params['id']
      });
  }


//Ahora este id es el que tengo enviar al servicio para traer el customer 
  updateOneAccount(id : string):void{
    this.accountservice.updateOneAccount(id);
  }

//Despues de que tengo el customer enotonces se lo igualo a mi varaible 
  getAccount(){
    this.accountservice.observableAccountOne
    .subscribe(
      (data : Account) => { this.account = data}
    )
    this.accountservice.updateOneAccount(this.accountId);

  }
  
  //Redirecciono a este componente si apreta click en editar
  editar(id : string){
    //Cambiar para la ruta de account edit
    this.router.navigate([`customerEdit/${id}`]);
  }


}
