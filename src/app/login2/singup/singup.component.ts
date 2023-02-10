import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {


  constructor (private formBuilder: FormBuilder, private router: Router){}

  formRegister = this.formBuilder.group({
    document: [''],
    password: [''],
    email: [''],
    fullname: [''],
    phone: [''],
    accountType:['']

  })


  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      document: ['', [Validators.required]],
      password: ['', Validators.required],
      email: ['', Validators.required],
      fullname: ['', Validators.required],
      phone: ['', Validators.required],
      accountType:['', Validators.required],
    })
  }

  send(): void {

    this.router.navigate(['account']);

    let  persona =  this.formRegister?.value
    console.log(this.formRegister?.value)
    localStorage.setItem( 'persona', JSON.stringify(persona) )

  }






  // async login(username: string, password: string) {
  //   try {
  //     const source$ = this.AuthService.post('http://localhost:3000/security/sign-up');
  //     const res = await lastValueFrom(source$);
  //     this.handleSuccessfulLogin(res);
  //   } catch (error) {
  //     console.error('Datos de inicio de sesión incorrectos');
  //   }
  // }

  // handleSuccessfulLogin(res: customerInterface) {
  //   const token = res.token;
  //   const decoded: void = jwt_decode(token);
  //   if (this.validateToken(token)) {
  //     this.storeToken(token, decoded);
  //     this.redirectToAccount();
  //   } else {
  //     console.error('Token inválido');
  //   }
  // }

  // validateToken(token: string): boolean {
  //   return typeof token === 'string' && token !== '';
  // }

  // storeToken(token: string, decoded: void) {
  //   localStorage.setItem('token', token);
  //   localStorage.setItem('account', JSON.stringify(decoded));
  // }

  // redirectToAccount() {
  //   this.router.navigate(['account']);
  // }













}





