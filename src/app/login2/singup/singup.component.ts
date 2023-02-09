import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {


  constructor (private formBuilder: FormBuilder){}

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


     let  persona =  this.formRegister?.value
     console.log(this.formRegister?.value)
    localStorage.setItem( 'persona', JSON.stringify(persona) )
  }

}





