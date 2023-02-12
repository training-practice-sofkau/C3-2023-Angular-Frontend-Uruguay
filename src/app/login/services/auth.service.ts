import { Injectable } from "@angular/core";
import { ApiService } from '../../api/api.service';
import { CustomerModel, DocumentTypeModel } from '../../program-Funcional/interfaces/customerModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignUpModel } from "../singup/interfaces/signUpModel";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protected documentType: DocumentTypeModel = {
    name: "",
  };
  
  protected newCustomer: SignUpModel = {
    documentType: this.documentType,//DocumentTypeModel , es un tipo de dato que nosotros creamos
    document: "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
  };

  public signUpObservable: BehaviorSubject<SignUpModel> = new BehaviorSubject<SignUpModel>(this.newCustomer);
  
  constructor(public apiService : ApiService) { }

  signUp(customer: SignUpModel):Observable<string>{//Me tendria que retornar el token
    return this.apiService.sigUp(customer);
  }


  


}
