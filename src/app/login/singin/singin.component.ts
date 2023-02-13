import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {



constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }


public email:string = "";
public password:string = "";



login(email: string, password: string) {
 console.log(email, password)
  this.authService.post('http://localhost:3000/security/singin', {
    email: email,
    password: password
  }).subscribe(res => {
    const token = res.token;

    const decoded: {} = jwtDecode(token);
      console.log(decoded);
    if (token && typeof token === 'string') {
      // Guardar el token en el almacenamiento local y redirigir al usuario a otra página
     console.log(decoded)
      localStorage.setItem('token', token);
      localStorage.setItem('customer', JSON.stringify(decoded));

    } else {
      console.error('Token inválido');
    }
  }, error => {
    console.error('Incorrecto');
  });

}

  formLogin = this.formBuilder.group({
    username: [''],
    password: [''],
  });


}


