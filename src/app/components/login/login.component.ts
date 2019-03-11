import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import {Router, ActivatedRoute} from '@angular/router'
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  title = 'RecruitersPortal';
  companyName: string;
  key: string;
  public edited = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router : Router){}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        companyName: [''],
        key: [''],
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.companyName =  this.f.companyName.value;
    this.key = this.f.key.value;
    this.http.post("http://localhost:5000/verifyKey",{companyName:this.companyName, companyKey: this.key}).subscribe((data)=>{
      console.log("Post request successful ",data);
      if(data===false){
        //Invalid Login

      this.edited=true;
      
    }else{
        //Code to route to recruiters home page
      this.edited=false;
      this.router.navigate(['/home']);
    }
    });

    
  }

}
