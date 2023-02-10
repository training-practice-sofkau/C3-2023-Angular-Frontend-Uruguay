import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  constructor(public router: Router) {
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
        Swal.fire(
          'BORRADO!',
          'Exito'
        )
        localStorage.clear()
        this.router.navigate(['account']);

      }
    })
  }

}
