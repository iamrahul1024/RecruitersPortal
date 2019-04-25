import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css',
  "css/ionicons.min.css",
  "css/bootstrap/bootstrap.min.css",
  "css/font-awesome.min.css",
  "css/main.css",
  "css/style.css",
  "css/responsive.css"]
})
export class ProfileComponent implements OnInit {

  prn: string;
  student : any;
  private oScore;
  private cScore;
  private eScore;
  private aScore;
  private nScore;
  private isEQScore;
  private loggedIn = this.auth.isLoggedIn;
  private oPercentage = 20;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router : Router,
    private auth: AuthService) { }

  
  ngOnInit() {
    console.log(this.loggedIn)
    if(this.loggedIn){
    this.prn = this.route.snapshot.queryParamMap.get('studentId');
    this.http.post("http://localhost:5000/getStudent",{studentID:this.prn}).subscribe((data:any[])=>{
      console.log(data);
      this.student=data;

      
    });
    this.prn = this.route.snapshot.queryParamMap.get('studentId');
    this.http.post("http://localhost:5000/getEQScore",{studentID:this.prn}).subscribe((data:any)=>{
      if(!data){
        this.isEQScore=false;
      }
      else{
      this.isEQScore=true;
      this.oScore = Math.floor(parseInt(data.oScore));
      this.cScore = parseInt(data.cScore);
      this.eScore = parseInt(data.eScore);
      this.aScore = parseInt(data.aScore);
      this.nScore = parseInt(data.nScore);
      }
    });
  }
    else{
      this.router.navigate(['/login']);
    }
  };

  progressPercentage=50;


  openResume(){
    this.router.navigate(['/resume'],{queryParams:{prn:this.student[0].prn}});
  }

}
