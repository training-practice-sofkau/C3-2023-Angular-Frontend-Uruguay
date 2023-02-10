import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DocumentTypeListModel } from 'src/app/interfaces/document.list.interface';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignupComponent {
  show: boolean = true;
  documentTypes: DocumentTypeListModel[] = [];
  documentTypeCurrent: string = "cedula de identidad";

  signupForm = this.formBuilder.group({
    name: new FormControl(""),
    email: new FormControl("", Validators.email),
    documentType: new FormControl(0),
    document: new FormControl(""),
    phone: new FormControl(""),
    password: new FormControl(""),
    password_confirmation: new FormControl(""),
    read: new FormControl("")
  });

  constructor(private formBuilder: FormBuilder, private cookie: CookieService, private router: Router) {}

  redirect(url: string) {
    this.router.navigate(["/" + url]);
  }

  onSubmit(): void {
    if (this.signupForm.valid){
      console.log("valid");
    }
    //this.signupForm.controls.name.setValue("xd");
    //this.cookie.set('hola', 'xd');
    //this.signupForm.reset();
    //this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
    this.documentTypes.push({value: "0", name: "Cedula de identidad"});
    this.documentTypes.push({value: "1", name: "Pasaporte"});
    this.documentTypes.push({value: "2", name: "Libreta de conducir"});
  }

  switchPassword(){
    this.show = !this.show;
  }

  switchDocumentType(value: number){
    this.documentTypeCurrent = this.documentTypes[value].name.toLowerCase();
  }

}
