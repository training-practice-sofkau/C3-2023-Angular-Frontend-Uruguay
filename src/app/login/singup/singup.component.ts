import { Component } from '@angular/core';


import { Router } from '@angular/router';
import { newCustomerModel } from '../../models/new-customer.model';
import { SingUpService } from './singup.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss'],
})
export class singupComponent {
  documentTypeId: string;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;

  constructor(private readonly  singUpService:SingUpService , private router: Router) {
    this.documentTypeId = '';
    this.document = '';
    this.fullName = '';
    this.email = '';
    this.phone = '';
    this.password = '';
  }

  sendData(): void {
    const user = new newCustomerModel(
      this.documentTypeId,
      this.document,
      this.fullName,
      this.email,
      this.phone,
      this.password
    );
    this.singUpService.createUser(user).subscribe({
      next: token => {
        localStorage.setItem('token', "tokentest");

      },
      error: err => console.error(err),
      complete: () => {
        this.router.navigate(['**']);
      },
    });
  }
}
