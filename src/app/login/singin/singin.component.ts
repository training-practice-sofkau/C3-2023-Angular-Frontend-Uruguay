import { Component, OnInit } from '@angular/core';
import { SignIn, UserResponse } from '../interfaces/signInModel';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-singin',
  providers:[AuthService],
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent implements OnInit {
  
  token ! : string;

  constructor(private authService : AuthService){}
  
  ngOnInit(): void {
    const userData: SignIn = {
      username: `cris@gmail.com`,
      password:`cris12344`,
    };

  }


}
