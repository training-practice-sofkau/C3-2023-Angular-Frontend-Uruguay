import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { customerInterface, AccountInterfaec} from '../../../tools';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { signUpInterface } from 'src/app/tools/interface/signUpInterface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private auth: Auth) { }

  get(url: string){
    return this.http.get<AccountInterfaec>(url)
}
post(url: string, data: {}){
  return this.http.post<customerInterface>(url, data)
}

post2(url: string, data: void){
  return this.http.post(url, data)
}
post3(url: string, data: signUpInterface){
  return this.http.post(url, data)
}
register(email:string, password: string){
  return createUserWithEmailAndPassword(this.auth, email, password)
}

login(email:string, password: string)
{
  return signInWithEmailAndPassword(this.auth, email, password)
}

loginWithGoogle(){
  return signInWithPopup(this.auth, new GoogleAuthProvider)
}

logOut(){
  return signOut(this.auth)
}



}
