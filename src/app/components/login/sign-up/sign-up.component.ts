import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Interfaces
import { CustomerSignUpModel } from '../../../interfaces/customer.interface';

//Services
import { CustomerService } from '../../../services/customer.service';
import { MessengerService } from '../../../services/messenger.service';

//Components
import { AppComponent } from '../../../app.component';
import { AuthService } from '../../../services/auth.service';
import { LoginComponent } from '../login.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  documentTypes: string[] = ["ID Card", "Passport ID"];
  defaultDocType: string = this.documentTypes[0];
  hide = true;
  loading = false;

  //accountTypes: string[] = ["Saving", "Checks"];

  constructor(private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    private messages: MessengerService,
    public appComp: AppComponent,
    private authService: AuthService,
    ) {
    this.signupForm = this.fb.group({
      documentType: ["ID Card", Validators.required],
      document: ["", Validators.required],
      fullname: ["", Validators.required],
      email: ["", [Validators.email, Validators.required]],
      phone: [""],
      password: ["", [Validators.minLength(5), Validators.required]]
    })
  }

  ngOnInit(): void { }

  /**
   * creates a new instance of Customer
   * ready to be sent to back for registration
   */
  createNewCustomer() {
    const customer: CustomerSignUpModel = {
      documentType: this.signupForm.value.documentType,
      document: this.signupForm.value.document,
      fullname: this.signupForm.value.fullname,
      email: this.signupForm.value.email,
      phone: this.signupForm.value.phone,
      password: this.signupForm.value.password,
      accountTypeName: 'Saving'
    }

    this.customerService.addNewCustomer(customer);

    this.messages.infoMsg("New Customer created successfully!", "", 2000);

    this.transitionToDesktop();
  }

/**
   * Transition from login to Desktop ( after verify credentials )
   */
transitionToDesktop() {

  this.loading = true;

  setTimeout(() => {
    this.loading = false;
    this.authService.setUserStatus(true);
    this.appComp.isInPublicZone = false;
    this.router.navigate(["desktop"]);
  }, 1500);
}



}
