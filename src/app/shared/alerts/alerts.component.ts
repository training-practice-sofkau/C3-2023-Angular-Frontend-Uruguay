import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Alerts } from './alerts.component.stories';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
})
export class AlertsComponent {

showModal(){
  Swal.fire({
    title: 'Estas seguro?',
    text: "Esto nos e puede revertir!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'BORRAD!',
        'Exito'
      )
    }
  })
}


}
