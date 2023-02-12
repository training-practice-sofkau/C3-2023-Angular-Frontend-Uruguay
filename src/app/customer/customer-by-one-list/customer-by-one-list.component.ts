import { Component, Host, OnInit } from '@angular/core';
import { Customer } from '../interface/customer';
import { CustomerService } from '../service/customer.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-customer-by-one-list',
  providers:[CustomerService],
  templateUrl: './customer-by-one-list.component.html',
  styleUrls: ['./customer-by-one-list.component.scss']
})
export class CustomerByOneListComponent implements OnInit {
  customerId: string = ""; 
  protected customer!: Customer; //lo que me traiga la api desde mi servicio se lo tengo que igual a mi varaible customer
  
  constructor(
    @Host() public service : CustomerService ,
    private readonly route : ActivatedRoute,
    private router : Router){}

  ngOnInit(): void {
    this.paramsCustomerId(); //igualo mi variable customerId con el parametro que me llega
    this.updateOneCustomer(this.customerId);//le paso el customerId como parametro y me retorna el customer con ese id
    this.getCustomer();//Me suscribo al emisor para traer su contenido que es un objeto customer y se lo igualo a mi variable 
  
  }


// Capturo el parametro que se pasa por la rota
  paramsCustomerId():void{ 
    this.route.params.subscribe(
      (params : Params) => {
        this.customerId = params['id']
      });
  }


//Ahora este id es el que tengo enviar al servicio para traer el customer 
  updateOneCustomer(id : string):void{
    this.service.updateOneCustomer(id);
  }

//Despues de que tengo el customer enotonces se lo igualo a mi varaible 
  getCustomer(){
    this.service.customerOneObservable.subscribe(
      (data : Customer) => { this.customer = data}
    )
    this.service.updateOneCustomer(this.customerId);

  }
  
  //Redirecciono a este componente si apreta click en editar
  editar(id : string){
    this.router.navigate([`customerEdit/${id}`]);
  }



  
}
