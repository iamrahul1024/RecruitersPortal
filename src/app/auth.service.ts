import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = JSON.parse(localStorage.getItem("loggedIn") || "false");
  private companyName = JSON.parse(JSON.stringify(localStorage.getItem("companyName") || "false"));
  constructor(private http: HttpClient) { }

  setLoggedIn(value){
    this.loggedInStatus= value;
    localStorage.setItem("loggedIn",value);
  }

  setCompanyName(companyName){
    this.companyName= companyName;
    localStorage.setItem("companyName",companyName);
  }

  get preStoreCompanyName(){
    return this.companyName;
  }
  get isLoggedIn(){
    return this.loggedInStatus;
  }

}
