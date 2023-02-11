import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {

  constructor (public loginService: LoginService) {}

}
