import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newdeposit',
  templateUrl: './newdeposit.component.html',
})
export class NewdepositComponent implements OnInit {
  depositForm: FormGroup ;

  constructor(private FormBuilder: FormBuilder) {
    this.depositForm = this.FormBuilder.group({
      accountType: ['', Validators.required],
      depositReason: ['', Validators.required],
      depositAmount: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]]
    });
  }

  ngOnInit() {
    this.depositForm = this.FormBuilder.group({
      accountType: ['', Validators.required],
      depositReason: ['', Validators.required],
      depositAmount: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]]
    });
  }

  submitForm() {
    console.log(this.depositForm.value);
    // aquí puedes enviar los datos a tu API o guardarlos en una variable
  }
}
