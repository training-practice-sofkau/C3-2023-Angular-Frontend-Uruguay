import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { customerInterface } from 'src/app/tools';
import Swal from 'sweetalert2';
import { AccountInterfaec } from '../../../tools/interface/account-interface';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  constructor(public router: Router, private http: HttpClient) {
      }


      public customerDate = localStorage.getItem('customer')
      public customer: customerInterface = this.customerDate? JSON.parse(this.customerDate): null



  async getPassword() {
    const { value: password } = await Swal.fire({
      title: 'Ingrese  su Password',
      input: 'password',
      inputLabel: 'Password',
      inputPlaceholder: 'Enter your password',
    });

    return password;
  }

  async getDocument() {
    const { value: document } = await Swal.fire({
      title: 'Ingrese  su Documento',
      input: 'text',
      inputPlaceholder: 'Enter your Documento',
    });

    return document;
  }

  alertError(){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Esto no se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar cuenta!'
    }).then((result) => {
      if (result.isConfirmed) {

        Swal.fire(
          'BORRADO!',
          'Exito'
        )


        this.Put(`http://localhost:3000/customers/unsubscribe/${this.customer?.id}`).subscribe();

        localStorage.clear()
        this.router.navigate(['account']);

      }
    })
  }


  Put(url: string){
    return this.http.put(url, true )
  }

}
