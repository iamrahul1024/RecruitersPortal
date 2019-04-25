import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  private prn;
  private link; //will store response body here, also this variable accesses in resume.component.html
  data: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router : Router,
    private auth: AuthService
  ) { }
  pdfSrc: any;
  public loading = false;
  ngOnInit() {

    this.prn = this.route.snapshot.queryParamMap.get('prn');
    console.log(this.prn);
    if(this.auth.isLoggedIn){

    //Send get request to Node in backend to get the resume in response body
    //getting resume by name not implemented yet
      const url = 'http://localhost:5000/getName';
      this.http.post(url,{prn:this.prn},{responseType:'json'}).subscribe((response:any)=>{
      this.link = response.Body; //getting resume in response body
      });

      this.loading = true;
    }
    else{
      this.router.navigate(['/login'])
    }
    };
    
    callBackFn(event){
      this.loading=false; //to show loading GIF, while pdf is getting loaded
    }

}


