import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { BehaviorSubject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  loggedUser: BehaviorSubject<boolean> = new BehaviorSubject(false);
  publicZone: BehaviorSubject<boolean> = new BehaviorSubject(true);

  setUserLogStatus(status: boolean) {
    this.loggedUser.next(status);
  }

  setPublicZoneStatus(status: boolean){
    this.publicZone.next(status);
  }


  constructor(
    private auth: Auth,
  ) { }


  /**
   * Used to login with Firebase
   * @returns Promise Token
   */
  loginWithFirebase() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  /**
   * User to make a registration of new user with Firebase
   * @param email
   * @param pass
   * @returns promise
   */
  registerWithFirebase(email: string, pass: string){
    return from(createUserWithEmailAndPassword(this.auth, email, pass))
  }



  /*
  public setIsPublicZone(status: boolean) {
    this.isInPublicZone = status;
  }

  /**

  public getIsPublicZone(): boolean {
    return this.isInPublicZone;
  }

  /**
   * Sets the status of the user ( login )
   * @pa
  public setUserStatus(status: boolean) {
    this.userIsLogged = status;
  }

  /**
   * return the status of the user ( login )
   * @returns boolean with the status of the user

  public getUserStatus(): boolean {
    return this.userIsLogged;
  } */
}

