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
        const customerDate = localStorage.getItem('customer')
        let customer:customerInterface  = customerDate? JSON.parse(customerDate): null
        if (customer) {
          this.Post(`http://localhost:3000/customers/unsubscribe/${customer.id}`).subscribe();

          Swal.fire(
            'BORRADO!',
            'Exito'
          )

          localStorage.clear()
          this.router.navigate(['account']);
        } else {
          console.error("No se puede borrar la cuenta porque el cliente no está disponible");
        }
      }
    })
  }



  Post(url: string){
    return this.http.post(url, true )
  }

}
