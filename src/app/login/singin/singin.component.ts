import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {

constructor(
  private router: Router,
  private  serviceCom: AuthService
  )
{}



login (){
  

//consultar si el user existet
this.serviceCom.check = true
this.router.navigate(['/Myaccount'])

}



}
