import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CustomerSignInModel, CustomerSignUpModel } from '../interfaces/Customer.interface';
import { SigninResponseModel } from '../interfaces/responses.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userIsValid: boolean = false;
  token: string = "";

  constructor(

    private http: HttpClient,

  ) { }


  /**
   * Sets the status of the user ( login )
   * @param status boolean to set Status
   */
  public setUSerStatus(status: boolean) {
    this.userIsValid = status;
  }

  /**
   * return the status of the user ( login )
   * @returns boolean with the status of the user
   */
  public getUserStatus(): boolean {
    return this.userIsValid;
  }

  async customerSignIn(customer: CustomerSignInModel) {

    //this.http.post(`${environment.API_URL}/security/signin`, customer)

    const response = await fetch(`${environment.API_URL}/security/signin`, {
      method:'POST',
      body: JSON.stringify(customer)
    });


    const {jwt_token} = await response.json();

    await console.log({jwt_token});

    /* fetch(`${environment.API_URL}/security/signin`,{
      method:'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(customer)
    })
    .then( resp => {

      const tok = resp.json();
      console.log( tok );

    }).then() */


    //  .subscribe(
    //    res => {
    //      console.log(res);
    //  })
  }


  customerSignUp(customer: CustomerSignUpModel) {
    this.http.post(`${environment.API_URL}/security/signup`, customer)
  }

}

