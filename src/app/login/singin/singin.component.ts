import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { SignIn } from '../interfaces/signInModel';


@Component({
  selector: 'app-singin',
  providers:[LoginService],
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {
  
  constructor(private loginService : LoginService){}
  
  ngOnInit(): void {
    const userData: SignIn = {
      email : `cris@gmail.com`,
      password:`cris12344`,
    };
    this.loginService.logIn(userData).subscribe((data)=>(console.log(`login`)));
    
  }

}
