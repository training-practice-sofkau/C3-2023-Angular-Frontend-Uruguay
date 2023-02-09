import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { DocumentTypeListModel } from 'src/app/interfaces/document.list.interface';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingupComponent {
  show: boolean = true;
  documentTypes: DocumentTypeListModel[] = [];
  documentTypeCurrent: string = "cedula de identidad";

  signupForm = this.formBuilder.group({
    name: new FormControl(""),
    email: new FormControl(""),
    documentType: new FormControl(0),
    document: new FormControl(""),
    phone: new FormControl(""),
    password: new FormControl(""),
    password_confirmation: new FormControl(""),
    read: new FormControl("")
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    this.signupForm.controls.name.setValue("xd");
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
