import { AuthService } from './../../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
  "./css/util.css",
  "./css/main.css"

]
})
export class HomeComponent implements OnInit {
  
  constructor(   
    private http: HttpClient,
    private route: ActivatedRoute,
    private router : Router,
    private auth : AuthService
    ) {
   }

   private data: any;
   private loggedIn =  this.auth.isLoggedIn;
   private companyName = this.auth.preStoreCompanyName;

   ngOnInit() {

    if(this.loggedIn && this.companyName){
          console.log(this.loggedIn);
          console.log(this.companyName);
          this.http.post("http://localhost:5000/getStudentOfCompany",{companyName: this.companyName}).subscribe((data: any[])=>{
            this.data=data;
      })
    }
    else{
      this.router.navigate(['/login'])
    }
  }


  studentSelect(prn){
    console.log(prn);
    this.router.navigate(['/profile'],{queryParams:{studentId:prn}});
  }



}
